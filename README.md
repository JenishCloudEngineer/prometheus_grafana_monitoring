### Prometheus + Grafana Monitoring Setup

This repository contains a complete monitoring stack built using Prometheus, Grafana, and a sample Node.js metrics application, deployed using Docker Compose. This setup is designed for an sample application with a /metrics endpoint to configure Prometheus to scrape metrics, deploy Grafana and visualize the metrics, and create/export a Grafana dashboard.
## Prerequisites
- Docker  
- Docker Compose  
- Git  
- (Optional) Node.js for app testing

## 1. Build & Run Metrics Application
cd app  
docker build -t app:latest .  
docker run -d -p 3000:3000 app  

Test:
http://localhost:3000/metrics

Expected metrics example:
sample_http_requests_total 1  
nodejs_heap_size_used_bytes 2359296

## 2. Start Prometheus + Grafana
cd monitoring  
docker compose up -d

Service URLs:
- Prometheus → http://localhost:9090  
- Grafana → http://localhost:3001  
- App Metrics → http://localhost:3000/metrics

## Prometheus Configuration
Sample prometheus.yml scrape config:

scrape_configs:
  - job_name: "sample-app"
    metrics_path: "/metrics"
    static_configs:
      - targets: ["host.docker.internal:3000"]

## Grafana Configuration

# Datasource (datasource.yaml)
datasources:
  - name: Prometheus
    type: prometheus
    access: proxy
    url: http://prometheus:9090

# Dashboard Auto-Provision
Grafana loads dashboards automatically from:
monitoring/grafana/dashboards/app-dashboard.json

# Useful Prometheus Queries
sample_http_requests_total  
nodejs_heap_size_used_bytes  
rate(sample_http_requests_total[5m])
 

