import { LightningElement } from "lwc";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

import vantajs from "@salesforce/resourceUrl/vantajs";
import threejs from "@salesforce/resourceUrl/threejs";

export default class VantaCloud extends LightningElement {
  connectedCallback() {
    Promise.all([loadScript(this, vantajs), loadScript(this, threejs)])
      .then(() => {
        const canvas = document.createElement("canvas");
        this.template.querySelector("div.vantaCanvas").appendChild(canvas);
        VANTA.CLOUDS({
          el: canvas,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
