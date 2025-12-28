package com.chicagoamp.images;

import com.chicagoamp.vimeo.VimeoService;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/images")
public class ImageController {
  private final ImageService imageService;
  private final VimeoService vimeoService;

  public ImageController(ImageService imageService, VimeoService vimeoService) {
    this.imageService = imageService;
    this.vimeoService = vimeoService;
  }

  @GetMapping
  public List<ImageAsset> listImages() {
    return imageService.listImages();
  }

  @PostMapping(value = "/dedupe", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ImageDedupeResult dedupeImage(
    @RequestPart("file") MultipartFile file,
    @RequestParam(value = "source", defaultValue = "UPLOAD") ImageSource source,
    @RequestParam(value = "title", required = false) String title
  ) {
    return imageService.dedupeAndStore(file, source, title);
  }

  @PostMapping("/grab-vimeo-thumbs/{videoId}")
  public List<ImageAsset> grabVimeoThumbs(@PathVariable String videoId) {
    if (!vimeoService.isConfigured()) {
      throw new IllegalStateException("Vimeo is not configured. Set VIMEO_ACCESS_TOKEN.");
    }
    return vimeoService.importThumbnails(videoId);
  }
}
