package com.chicagoamp.analytics;

import com.chicagoamp.videos.VideoAsset;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "analytics_snapshots")
public class AnalyticsSnapshot {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "video_id")
  private VideoAsset video;

  private Integer views;

  private Integer watchTimeSeconds;

  private Double engagementRate;

  private LocalDate recordedAt;

  private Instant createdAt = Instant.now();

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public VideoAsset getVideo() {
    return video;
  }

  public void setVideo(VideoAsset video) {
    this.video = video;
  }

  public Integer getViews() {
    return views;
  }

  public void setViews(Integer views) {
    this.views = views;
  }

  public Integer getWatchTimeSeconds() {
    return watchTimeSeconds;
  }

  public void setWatchTimeSeconds(Integer watchTimeSeconds) {
    this.watchTimeSeconds = watchTimeSeconds;
  }

  public Double getEngagementRate() {
    return engagementRate;
  }

  public void setEngagementRate(Double engagementRate) {
    this.engagementRate = engagementRate;
  }

  public LocalDate getRecordedAt() {
    return recordedAt;
  }

  public void setRecordedAt(LocalDate recordedAt) {
    this.recordedAt = recordedAt;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Instant createdAt) {
    this.createdAt = createdAt;
  }
}
