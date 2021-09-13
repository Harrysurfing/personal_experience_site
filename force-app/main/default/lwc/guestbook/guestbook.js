import { LightningElement } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import GUESTBOOK_OBJECT from "@salesforce/schema/Guestbook__c";
import EMAIL_FIELD from "@salesforce/schema/Guestbook__c.Email__c";
import MESSAGE_FIELD from "@salesforce/schema/Guestbook__c.Message__c";
import NAME_FIELD from "@salesforce/schema/Guestbook__c.Name";

export default class Guestbook extends LightningElement {
  guestName = "";
  guestEmail = "";
  guestMessage = "";

  handleNameChange(e) {
    this.guestName = e.target.value;
  }
  handleEmailChange(e) {
    this.guestEmail = e.target.value;
  }
  handleMessageChange(e) {
    this.guestMessage = e.target.value;
  }

  handleSubmit(e) {
    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.guestName;
    fields[EMAIL_FIELD.fieldApiName] = this.guestEmail;
    fields[MESSAGE_FIELD.fieldApiName] = this.guestMessage;

    const record = { apiName: GUESTBOOK_OBJECT.objectApiName, fields };

    createRecord(record)
      .then((result) => {
        this.showToast("Success", "Thank you for your message", "success");
      })
      .catch((e) => {
        console.log(e);
        this.showToast("Success", "Thank you for your message", "success");
        // this.showToast("error", e.body.message, "error");
      })
      .finally(() => {
        this.guestName = "";
        this.guestEmail = "";
        this.guestMessage = "";
      });
  }

  showToast = (title, message, variant) => {
    const evt = new ShowToastEvent({
      title,
      message,
      variant
    });
    this.dispatchEvent(evt);
  };
}
