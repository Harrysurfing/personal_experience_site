import { LightningElement, api } from "lwc";
import { getInfo } from "./cardUtil";

export default class PokemonCard extends LightningElement {
  @api pokemon;
  imgUrl;

  renderedCallback() {
    getInfo(this.pokemon.url).then((result) => (this.imgUrl = result));
  }
  handleOnload(e) {
    let width = e.target.clientWidth;
    e.target.style.height = `${width * 0.75}px`;
  }
}
