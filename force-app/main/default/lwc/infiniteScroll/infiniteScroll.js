import { LightningElement, track } from "lwc";

export default class InfiniteScroll extends LightningElement {
  @track cards = [
    {
      id: 1,
      text: "I am card number 1"
    },
    { id: 2, text: "I am card number 2" },
    { id: 3, text: "I am card number 3" },
    { id: 4, text: "I am card number 4" },
    { id: 5, text: "I am card number 5" },
    { id: 6, text: "I am card number 6" },
    { id: 7, text: "I am card number 7" },
    { id: 8, text: "I am card number 8" },
    { id: 9, text: "I am card number 9" }
  ];

  generateMoreTiles() {
    // const container = this.template.querySelector(".scroll-container");
    // document.createElement();
    let currentLength = this.cards.length;

    const newArray = this.cards;

    newArray.push({
      id: currentLength + 1,
      text: `I am card number ${currentLength + 1}`
    });
    // console.log(newArray);
    this.cards = newArray;
  }

  handleScroll(e) {
    // console.log(`scrollTop : ${e.target.scrollTop}`);
    // console.log(`div Height: ${e.target.clientHeight}`);
    // console.log(`Scroll Height ${e.target.scrollHeight}`);
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
      this.generateMoreTiles();
    }
  }
}
