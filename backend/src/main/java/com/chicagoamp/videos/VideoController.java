package com.chicagoamp.videos;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/videos")
public class VideoController {
  private final VideoAssetRepository videoAssetRepository;

  public VideoController(VideoAssetRepository videoAssetRepository) {
    this.videoAssetRepository = videoAssetRepository;
  }

  @GetMapping
  public List<VideoAsset> listVideos() {
    return videoAssetRepository.findAll();
  }
}
