package com.chicagoamp.analytics;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnalyticsSnapshotRepository extends JpaRepository<AnalyticsSnapshot, UUID> {}
