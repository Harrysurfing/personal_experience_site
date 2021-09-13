import { LightningElement, wire } from "lwc";
//import communityId from "@salesforce/community/Id";
import communityBasePath from "@salesforce/community/basePath";
import { NavigationMixin } from "lightning/navigation";

export default class BackToProjectsButton extends NavigationMixin(
  LightningElement
) {
  handleNavigation(e) {
    const pageName = communityBasePath + "/side-projects";
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: pageName
      }
    });
  }
}
