const express = require("express");
const client = require("prom-client");

const app = express();
const PORT = 3000;


client.collectDefaultMetrics();


const httpRequestCounter = new client.Counter({
  name: "sample_http_requests_total",
  help: "Total number of HTTP requests received",
});


const httpErrorCounter = new client.Counter({
  name: "sample_http_errors_total",
  help: "Total number of HTTP errors",
});


app.get("/", (req, res) => {
  httpRequestCounter.inc();   // increment total requests
  res.send("Sample App is Running 🚀");
});


app.get("/error", (req, res) => {
  httpErrorCounter.inc();
  res.status(500).send("Simulated Error");
});


app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.send(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`Sample app running at http://localhost:${PORT}`);
});

