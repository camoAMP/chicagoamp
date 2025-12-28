package com.chicagoamp.vimeo;

import com.chicagoamp.config.VimeoProperties;
import com.chicagoamp.images.ImageAsset;
import com.chicagoamp.images.ImageService;
import com.chicagoamp.images.ImageSource;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class VimeoService {
  private final VimeoClient vimeoClient;
  private final ImageService imageService;
  private final VimeoProperties vimeoProperties;

  public VimeoService(VimeoClient vimeoClient, ImageService imageService, VimeoProperties vimeoProperties) {
    this.vimeoClient = vimeoClient;
    this.imageService = imageService;
    this.vimeoProperties = vimeoProperties;
  }

  public boolean isConfigured() {
    return vimeoProperties.getAccessToken() != null && !vimeoProperties.getAccessToken().isBlank();
  }

  public List<ImageAsset> importThumbnails(String videoId) {
    List<VimeoThumbnail> thumbnails = vimeoClient.fetchThumbnails(videoId);
    List<ImageAsset> saved = new ArrayList<>();

    for (VimeoThumbnail thumbnail : thumbnails) {
      Optional<ImageAsset> asset = imageService.importRemoteImage(
        URI.create(thumbnail.link()),
        ImageSource.VIMEO,
        "Vimeo thumbnail " + videoId,
        vimeoProperties.getDownloadMaxBytes()
      );
      asset.ifPresent(saved::add);
    }

    return saved;
  }
}
