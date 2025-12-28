package com.chicagoamp.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "chicagoamp.storage")
public class StorageProperties {
  private String imagesPath = "./storage/images";

  public String getImagesPath() {
    return imagesPath;
  }

  public void setImagesPath(String imagesPath) {
    this.imagesPath = imagesPath;
  }
}
