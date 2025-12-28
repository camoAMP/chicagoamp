package com.chicagoamp.vimeo;

import com.chicagoamp.config.VimeoProperties;
import com.fasterxml.jackson.databind.JsonNode;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class VimeoClient {
  private final VimeoProperties vimeoProperties;
  private final RestClient restClient;

  public VimeoClient(VimeoProperties vimeoProperties) {
    this.vimeoProperties = vimeoProperties;
    this.restClient = RestClient.builder()
      .baseUrl(vimeoProperties.getApiBase())
      .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + vimeoProperties.getAccessToken())
      .build();
  }

  public List<VimeoThumbnail> fetchThumbnails(String videoId) {
    if (vimeoProperties.getAccessToken() == null || vimeoProperties.getAccessToken().isBlank()) {
      throw new IllegalStateException("Vimeo access token is not configured");
    }

    JsonNode response = restClient
      .get()
      .uri("/videos/{videoId}/pictures", videoId)
      .retrieve()
      .body(JsonNode.class);

    if (response == null) {
      return List.of();
    }

    List<VimeoThumbnail> thumbnails = new ArrayList<>();
    for (JsonNode picture : response.path("data")) {
      JsonNode sizes = picture.path("sizes");
      if (sizes.isArray() && sizes.size() > 0) {
        JsonNode best = sizes.get(sizes.size() - 1);
        String link = best.path("link").asText(null);
        Integer width = best.path("width").isInt() ? best.path("width").asInt() : null;
        Integer height = best.path("height").isInt() ? best.path("height").asInt() : null;
        if (link != null) {
          thumbnails.add(new VimeoThumbnail(link, width, height));
        }
      }
    }
    return thumbnails;
  }
}
