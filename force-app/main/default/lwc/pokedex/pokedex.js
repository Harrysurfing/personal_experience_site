import { LightningElement, track } from "lwc";
import { getNames } from "./pokedexUtil";

export default class Pokedex extends LightningElement {
  isLoading = true;
  searched = false;
  searchValue = "";
  names;
  @track cardList;

  handleSearchValueChange(e) {
    this.searchValue = e.target.value;
  }

  handleSearch() {
    let searchWord = this.searchValue.toLowerCase();
    this.cardList = this.names.filter((item) => item.name.includes(searchWord));
    this.searched = true;
  }
  connectedCallback() {
    getNames().then((result) => {
      this.names = result;
      this.isLoading = false;
      console.log(this.names);
    });
  }
}
