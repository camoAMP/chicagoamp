package com.chicagoamp.images;

import com.chicagoamp.config.StorageProperties;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;
import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestClient;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {
  private final ImageAssetRepository imageAssetRepository;
  private final StorageProperties storageProperties;
  private final RestClient restClient;

  public ImageService(ImageAssetRepository imageAssetRepository, StorageProperties storageProperties) {
    this.imageAssetRepository = imageAssetRepository;
    this.storageProperties = storageProperties;
    this.restClient = RestClient.builder().build();
  }

  public List<ImageAsset> listImages() {
    return imageAssetRepository.findAll();
  }

  @Transactional
  public ImageDedupeResult dedupeAndStore(MultipartFile file, ImageSource source, String title) {
    byte[] bytes = readBytes(file);
    String sha256 = sha256(bytes);

    Optional<ImageAsset> existing = imageAssetRepository.findBySha256(sha256);
    if (existing.isPresent()) {
      return new ImageDedupeResult(true, null, existing.get().getId(), sha256, file.getOriginalFilename());
    }

    ImageAsset asset = persistAsset(bytes, file.getOriginalFilename(), source, title, null);
    return new ImageDedupeResult(false, asset.getId(), null, sha256, file.getOriginalFilename());
  }

  @Transactional
  public Optional<ImageAsset> importRemoteImage(
    URI uri,
    ImageSource source,
    String title,
    long maxBytes
  ) {
    ResponseEntity<byte[]> response = restClient.get().uri(uri).retrieve().toEntity(byte[].class);
    byte[] bytes = response.getBody();
    if (bytes == null || bytes.length == 0) {
      return Optional.empty();
    }

    if (bytes.length > maxBytes) {
      return Optional.empty();
    }

    String filename = Paths.get(uri.getPath()).getFileName().toString();
    String sha256 = sha256(bytes);

    Optional<ImageAsset> existing = imageAssetRepository.findBySha256(sha256);
    if (existing.isPresent()) {
      return existing;
    }

    ImageAsset asset = persistAsset(bytes, filename, source, title, uri.toString());
    return Optional.of(asset);
  }

  private ImageAsset persistAsset(
    byte[] bytes,
    String originalFilename,
    ImageSource source,
    String title,
    String remoteUrl
  ) {
    String sha256 = sha256(bytes);
    String extension = StringUtils.getFilenameExtension(originalFilename);
    String storedName = extension == null ? sha256 : sha256 + "." + extension;
    Path storageRoot = Paths.get(storageProperties.getImagesPath());
    Path target = storageRoot.resolve(storedName);

    try {
      Files.createDirectories(storageRoot);
      Files.write(target, bytes);
    } catch (IOException ex) {
      throw new IllegalStateException("Failed to store image", ex);
    }

    ImageAsset asset = new ImageAsset();
    asset.setTitle(title);
    asset.setSource(source);
    asset.setSha256(sha256);
    asset.setFormat(extension);
    asset.setByteSize((long) bytes.length);
    asset.setOriginalFilename(originalFilename);
    asset.setStoragePath(target.toString());
    asset.setRemoteUrl(remoteUrl);

    return imageAssetRepository.save(asset);
  }

  private byte[] readBytes(MultipartFile file) {
    try {
      return file.getBytes();
    } catch (IOException ex) {
      throw new IllegalStateException("Unable to read uploaded file", ex);
    }
  }

  private String sha256(byte[] bytes) {
    try {
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      return HexFormat.of().formatHex(digest.digest(bytes));
    } catch (NoSuchAlgorithmException ex) {
      throw new IllegalStateException("SHA-256 not available", ex);
    }
  }
}
