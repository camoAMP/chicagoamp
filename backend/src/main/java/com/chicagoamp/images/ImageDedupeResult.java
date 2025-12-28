package com.chicagoamp.images;

import java.util.UUID;

public record ImageDedupeResult(
  boolean duplicate,
  UUID imageId,
  UUID existingImageId,
  String sha256,
  String filename
) {}
