import { LightningElement, track } from "lwc";
import * as AVATAR from "./avatarUtil";

export default class AvatarMaker extends LightningElement {
  name;
  nameEntered = false;
  namedBaseUrl;
  @track constructedUrl;
  topOptions = AVATAR.TOP;
  hatColorOptions = AVATAR.HAT_COLOR;
  hairColorOptions = AVATAR.HAIR_COLOR;
  facialHairOptions = AVATAR.FACIAL_HAIR;
  facialHairColorOptions = AVATAR.FACIAL_HAIR_COLOR;
  eyesOptions = AVATAR.EYES;
  eyebrowOptions = AVATAR.EYEBROW;
  skinOptions = AVATAR.SKIN;
  mouthOptions = AVATAR.MOUTH;
  glassesOptions = AVATAR.GLASSES;
  glassesColorOptions = AVATAR.GLASSES_COLOR;
  clothesOptions = AVATAR.CLOTHES;
  clothesColorOptions = AVATAR.CLOTHES_COLOR;

  top;
  hatColor;
  hairColor;
  facialHair;
  glasses;
  glassesColor;
  facialHairColor;
  eyes;
  eyebrow;
  mouth;
  skin;
  clothes;
  clothesColor;
  size = "w=100&h=100";
  shape = "r=5";
  background;

  handleNameInput(e) {
    this.name = e.target.value.toLowerCase();
  }

  handleNameConfirm() {
    this.namedBaseUrl = AVATAR.BASE_URL + this.name + ".svg?";
    this.constructedUrl =
      this.namedBaseUrl + `&${this.size}` + `&${this.shape}`;
    this.nameEntered = true;
  }

  handleDetailChange(e) {
    let detail = e.target.name;
    this[detail] = e.target.value;

    // console.log(detail);
    // console.log(this[detail]);
    // console.log(this.top);
    this.updateUrl();
  }

  handleGeneralChange(e) {
    let toChange = e.target.value;
    // console.log("Clicked");
    switch (toChange) {
      case "small":
        this.size = "w=50&h=50";
        break;
      case "medium":
        this.size = "w=120&h=120";
        break;
      case "large":
        this.size = "w=250&h=250";
        break;
      case "square":
        this.shape = "r=5";
        break;
      case "round":
        this.shape = "r=50";
        break;
      case "none":
        this.background = "";
        break;
      case "light":
        this.background = "%23add8e6";
        break;
      case "dark":
        this.background = "%23808080";
        break;
    }
    this.updateUrl();
  }

  updateUrl() {
    const details = [
      { name: "top", value: this.top },
      { name: "hatColor", value: this.hatColor },
      { name: "hairColor", value: this.hairColor },
      { name: "accessories", value: this.glasses },
      { name: "facialHair", value: this.facialHair },
      { name: "facialHairColor", value: this.facialHairColor },
      { name: "eyes", value: this.eyes },
      { name: "eyebrow", value: this.eyebrow },
      { name: "skin", value: this.skin },
      { name: "mouth", value: this.mouth },
      { name: "accessoriesColor", value: this.glassesColor },
      { name: "background", value: this.background },
      { name: "clothes", value: this.clothes },
      { name: "clothesColor", value: this.clothesColor }
    ];
    let newUrl = this.namedBaseUrl;
    details.forEach((detail) => {
      //   console.log(detail);
      if (detail.value) {
        newUrl = `${newUrl}&${detail.name}=${detail.value}`;
        // console.log(newUrl);
      }
    });
    if (this.facialHair) {
      newUrl += "&facialHairChance=100";
    } else {
      newUrl += "&facialHairChance=0";
    }
    if (this.glasses) {
      newUrl += "&accessoriesChance=100";
    } else {
      newUrl += "&accessoriesChance=0";
    }

    newUrl += `&${this.size}`;
    newUrl += `&${this.shape}`;

    this.constructedUrl = newUrl;
    // console.log(this.constructedUrl);
  }
}
