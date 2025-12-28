package com.chicagoamp.images;

import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageAssetRepository extends JpaRepository<ImageAsset, UUID> {
  Optional<ImageAsset> findBySha256(String sha256);
}
