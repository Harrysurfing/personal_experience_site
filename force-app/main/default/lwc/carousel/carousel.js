import { LightningElement } from "lwc";
import { CERT_DATA } from "./carouselUtil";

export default class Carousel extends LightningElement {
  certs = CERT_DATA;
  currentIndex = 0;
  imgClass = "carousel-img";
  setClassDelay;
  isLoading = true;
  isSlideRight = true;
  isSlideLeft = false;

  get currentPage() {
    let index = this.currentIndex;

    return this.certs[index];
  }

  getNextPage(e) {
    e.preventDefault();

    clearTimeout(this.setClassDelay);
    this.isLoading = true;
    let numberOfPages = this.certs.length;

    if (this.currentIndex + 1 >= numberOfPages) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
    this.isSlideRight = true;
    this.isSlideLeft = false;
    let childNodes = this.template.querySelector(".manual-nav").childNodes;
    childNodes.forEach((node, index) => {
      if (index === this.currentIndex) {
        node.setAttribute(
          "class",
          "manual-nav-button manual-nav-button-clicked"
        );
      } else {
        node.setAttribute("class", "manual-nav-button");
      }
    });
  }

  getPreviousPage(e) {
    e.preventDefault();
    clearTimeout(this.setClassDelay);
    this.isLoading = true;
    let numberOfPages = this.certs.length;

    if (this.currentIndex - 1 < 0) {
      this.currentIndex = numberOfPages - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
    this.isSlideRight = false;
    this.isSlideLeft = true;
    let childNodes = this.template.querySelector(".manual-nav").childNodes;
    childNodes.forEach((node, index) => {
      if (index === this.currentIndex) {
        node.setAttribute(
          "class",
          "manual-nav-button manual-nav-button-clicked"
        );
      } else {
        node.setAttribute("class", "manual-nav-button");
      }
    });
  }

  handleManualNav(e) {
    let index = parseInt(e.currentTarget.dataset.index);
    if (index === this.currentIndex) {
      return;
    } else if (index < this.currentIndex) {
      this.isSlideLeft = true;
      this.isSlideRight = false;
    } else {
      this.isSlideRight = true;
      this.isSlideLeft = false;
    }

    let childNodes = this.template.querySelector(".manual-nav").childNodes;
    childNodes.forEach((node) =>
      node.setAttribute("class", "manual-nav-button")
    );

    e.currentTarget.classList += " manual-nav-button-clicked";
    clearTimeout(this.setClassDelay);
    this.isLoading = true;
    this.currentIndex = index;
  }

  renderedCallback() {
    if (this.currentIndex === 0) {
      let firstChild = this.template.querySelector(".manual-nav").childNodes[0];
      firstChild.setAttribute(
        "class",
        "manual-nav-button manual-nav-button-clicked"
      );
    }
    this.setClassDelay = setTimeout(() => {
      this.imgClass = "carousel-img";
    }, 500);
    // console.log(this.isLoading);
  }

  handleImgLoad(e) {
    this.isLoading = false;
    let width = e.target.clientWidth;
    e.target.style.height = `${width * 0.75}px`;
    // console.log("isloading set");
    if (this.isSlideLeft) {
      this.imgClass = `carousel-img img-slide-left`;
    } else if (this.isSlideRight) {
      this.imgClass = `carousel-img img-slide-right`;
    }
  }

  // connectedCallback() {
  //   let firstChild = this.template.querySelector(".manual-nav").childNodes[0];
  //   firstChild.setAttribute(
  //     "class",
  //     "manual-nav-button manual-nav-button-clicked"
  //   );
  // }
}
