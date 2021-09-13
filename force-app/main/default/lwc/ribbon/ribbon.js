import { api, LightningElement } from "lwc";

export default class Ribbon extends LightningElement {
  @api
  notready;

  get ribbonClass() {
    return this.notready ? "ribbon not-ready" : "ribbon ready";
  }

  get ribbonContent() {
    return this.notready ? "Coding..." : "Finished";
  }

  //   connectedCallback() {
  //     console.log(this.notready);
  //     this.ribbonClass = this.notReady ? "ribbon not-ready" : "ribbon ready";
  //     console.log(this.ribbonClass);
  //     this.ribbonContent = this.notReady ? "Coding..." : "Finished";
  //     console.log(this.ribbonContent);
  //   }
}
