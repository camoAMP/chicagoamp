package com.chicagoamp.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "chicagoamp.vimeo")
public class VimeoProperties {
  private String accessToken;
  private String apiBase = "https://api.vimeo.com";
  private long downloadMaxBytes = 8_388_608;

  public String getAccessToken() {
    return accessToken;
  }

  public void setAccessToken(String accessToken) {
    this.accessToken = accessToken;
  }

  public String getApiBase() {
    return apiBase;
  }

  public void setApiBase(String apiBase) {
    this.apiBase = apiBase;
  }

  public long getDownloadMaxBytes() {
    return downloadMaxBytes;
  }

  public void setDownloadMaxBytes(long downloadMaxBytes) {
    this.downloadMaxBytes = downloadMaxBytes;
  }
}
