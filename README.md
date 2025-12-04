# Prometheus + Grafana Monitoring Setup

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

http://localhost:3000/

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

Check the target health that your website is added.

Check the site is up or down. And add the queries that are created in the code

Add query select graph

          sample_http_requests_total   
          nodejs_heap_size_used_bytes 

If it works then prometheus fine.

## Grafana Configuration

Create a dashboard with the new data source 

Add the URL http://prometheus:9090

Test and save.

Dashoard is ready select the data-source as prometheus.

checkt the graph by runnig the queries.



