package com.chicagoamp.videos;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoAssetRepository extends JpaRepository<VideoAsset, UUID> {}
