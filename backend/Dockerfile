FROM eclipse-temurin:21-jre

WORKDIR /app
COPY target/chicago-amp-backend-0.1.0.jar app.jar

ENV JAVA_OPTS="-XX:MaxRAMPercentage=75"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar /app/app.jar"]
