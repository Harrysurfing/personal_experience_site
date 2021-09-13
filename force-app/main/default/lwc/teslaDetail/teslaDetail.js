import { api, LightningElement, wire } from "lwc";
import { refreshApex } from "@salesforce/apex";

// import { updateRecord } from "lightning/uiRecordApi";
// import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import { showToast } from "c/util";

import getTesla from "@salesforce/apex/TeslaDataController.getTeslaRecord";
import updateCount from "@salesforce/apex/TeslaDataController.updateCount";

// import NAME_FIELD from "@salesforce/schema/Tesla__c.Name";
// import TRUCK_FIELD from "@salesforce/schema/Tesla__c.Truck__c";
// import CAR_ACC_FIELD from "@salesforce/schema/Tesla__c.Acceleration_car__c";
// import TRUCK_ACC_FIELD from "@salesforce/schema/Tesla__c.Acceleration_truck__c";
// import CARGO_FIELD from "@salesforce/schema/Tesla__c.Cargo__c";
// import RANGE_FIELD from "@salesforce/schema/Tesla__c.Range_est__c";
// import STORAGE_FIELD from "@salesforce/schema/Tesla__c.Storage__c";
// import TOP_SPEED_FIELD from "@salesforce/schema/Tesla__c.Top_Speed__c";
import ID_FIELD from "@salesforce/schema/Tesla__c.Id";
import COUNT_FIELD from "@salesforce/schema/Tesla__c.Count__c";

// const FIELDS = [
//   NAME_FIELD,
//   TRUCK_FIELD,
//     CAR_ACC_FIELD,
//   TRUCK_ACC_FIELD,
//   CARGO_FIELD,
//   RANGE_FIELD,
//   STORAGE_FIELD,
//   TOP_SPEED_FIELD
// ];

export default class TeslaDetail extends LightningElement {
  @api
  recordid;
  carData;
  wiredRecordResult;

  //   @wire(getRecord, { recordId: "$recordid", fields: FIELDS })
  //   wiredRecord({ data, error }) {
  //     if (data) {
  //       this.carData = data;
  //     } else if (error) {
  //       console.log(error.body.message);
  //       showToast("Error", error.body.message, "error", this);
  //     }
  //   }

  @wire(getTesla, { recordId: "$recordid" }) wiredRecord(result) {
    this.wiredRecordResult = result;
    if (result.data) {
      this.carData = result.data;
    } else if (result.error) {
      // console.log(error.body.message);
      showToast("Error", result.error.body.message, "error", this);
    }
  }

  handleClose() {
    const evt = new CustomEvent("closecardetails");
    this.dispatchEvent(evt);
  }

  handleRent() {
    // const fields = {};
    // fields[ID_FIELD.fieldApiName] = this.recordid;
    // fields[COUNT_FIELD.fieldApiName] = this.carData.Count__c + 1;
    // const recordInput = { fields };
    // updateRecord(recordInput)
    updateCount({ recordId: this.recordid })
      .then(() => {
        showToast(
          "Thank you",
          "You have successfully rented the TESLA !",
          "success",
          this
        );
        return refreshApex(this.wiredRecordResult);
      })
      .catch((e) => {
        console.log(e);
        showToast("Error", "Something went wrong", "error", this);
      });
  }

  renderedCallback() {}
}
