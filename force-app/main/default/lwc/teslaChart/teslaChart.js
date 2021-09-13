import { LightningElement, wire } from "lwc";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";
import chartjs from "@salesforce/resourceUrl/chartJs";
import getTeslas from "@salesforce/apex/TeslaDataController.getTeslas";
import { showToast } from "c/util";

export default class TeslaChart extends LightningElement {
  chart;
  chartIntialized = false;

  config = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(255,82,250)",
            "rgb(20,150,100)"
          ],
          label: "Dataset 1"
        }
      ],
      labels: []
    },
    options: {
      responsive: true,
      legend: {
        position: "top",
        boxWidth: 15,
        padding: 5
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  };

  @wire(getTeslas) wiredTeslas({ error, data }) {
    if (data) {
      //   console.log(data);
      data.forEach((tesla) => {
        this.config.data.datasets[0].data.push(tesla.Count__c);
        this.config.data.labels.push(tesla.Name);
      });
    } else if (error) {
      showToast("Error", e.body.message, "error", this);
    }
  }

  renderedCallback() {
    if (this.chartIntialized) {
      return;
    }
    this.chartIntialized = true;

    Promise.all([
      loadScript(this, chartjs + "/Chart.min.js"),
      loadStyle(this, chartjs + "/Chart.min.css")
    ])
      .then(() => {
        // console.log(this.config.data.datasets);
        // disable Chart.js CSS injection
        window.Chart.platform.disableCSSInjection = true;

        const canvas = document.createElement("canvas");
        this.template.querySelector("div.chart").appendChild(canvas);
        const ctx = canvas.getContext("2d");
        this.chart = new window.Chart(ctx, this.config);
      })
      .catch((error) => {
        this.error = error;
      });
  }
}
