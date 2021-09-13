import { LightningElement } from "lwc";

export default class Typical extends LightningElement {
  TypeWriter = (txtElement, words, wait = 2000) => {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  };

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    let typeSpeed = 100;
    if (this.isDeleting) {
      typeSpeed = typeSpeed / 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 300;
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    setTimeout(() => this.type(), typeSpeed);
  }

  init() {
    const txtElement = this.template.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    this.TypeWriter(txtElement, words, wait);
  }

  renderedCallback() {
    this.init();
  }
}
