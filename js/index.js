import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "regenerator-runtime/runtime";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-qqgxi", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart1 = sdk.createChart({
  chartId: "62467466-a9de-4f9c-88d9-62dc6ec28b96", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  height: "700px",
});

async function renderCharts() {
  await chart1.render(document.getElementById("chart1"));
}

renderCharts().catch((e) => window.alert(e.message));
