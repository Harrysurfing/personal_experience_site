import { LightningElement } from "lwc";
import communityBasePath from "@salesforce/community/basePath";
import { NavigationMixin } from "lightning/navigation";

import { LIST } from "./PROJECTS_DATA";

export default class ProjectList extends NavigationMixin(LightningElement) {
  projects = LIST;

  handleNavigation(e) {
    let path = e.currentTarget.dataset.path;
    const pageName = communityBasePath + path;
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: pageName
      }
    });
  }
}
