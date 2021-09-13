import { LightningElement, wire } from "lwc";
// import { getListUi } from "lightning/uiListApi";
import { showToast } from "c/util";

// import TESLA_OBJECT from "@salesforce/schema/Tesla__c";
// import TESLA_ID_FIELD from "@salesforce/schema/Tesla__c.Id";

import getTeslas from "@salesforce/apex/TeslaDataController.getTeslas";

export default class RentYourTesla extends LightningElement {
  teslas;

  value = "all";
  selectedRecordId;

  get teslasToShow() {
    switch (this.value) {
      case "all":
        return this.teslas;
      case "cars":
        return this.teslas.filter((tesla) => !tesla.Truck__c);
      case "trucks":
        return this.teslas.filter((tesla) => tesla.Truck__c);
    }
  }
  get options() {
    return [
      { label: "All", value: "all" },
      { label: "Cars", value: "cars" },
      { label: "Trucks", value: "trucks" }
    ];
  }

  @wire(getTeslas)
  wiredTesla({ error, data }) {
    if (data) {
      this.teslas = data;
    } else if (error) {
      console.log(error);
      showToast("Error", error.body.message, "error", this);
    }
  }

  // @wire(getListUi, {
  //   objectApiName: TESLA_OBJECT,
  //   listViewApiName: "All",
  //   pageSiez: 10,
  //   sortBy: TESLA_ID_FIELD
  // })
  // listView({ error, data }) {
  //   if (data) {
  //     this.teslas = data.records.records;
  //   } else if (error) {
  //     showToast("error", error.body.message, "error", this);
  //   }
  // }

  handleChange(e) {
    this.value = e.target.value;
  }

  handleCarSelect(e) {
    const teslaDetail = this.template.querySelector(".tesla-chart");
    teslaDetail.style.display = "block";
    this.selectedRecordId = e.currentTarget.dataset.value;
    // console.log(this.selectedRecordId);
    // const evt = new CustomEvent("teslaSelect", { detail: recordId });
    // this.dispatchEvent(evt);
  }

  handleClose() {
    const teslaDetail = this.template.querySelector(".tesla-chart");
    teslaDetail.style.display = "none";
  }
  renderedCallback() {
    // console.log(this.teslas);
  }
}
