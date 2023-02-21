import { LightningElement } from "lwc";
import PD1 from "@salesforce/resourceUrl/pd1";
import JS from "@salesforce/resourceUrl/js";
import ADMIN from "@salesforce/resourceUrl/admin";
import PD2 from "@salesforce/resourceUrl/pd2";
import APPBUILDER from "@salesforce/resourceUrl/appbuilder";

export default class Certification extends LightningElement {
  js = JS;
  pd1 = PD1;
  admin = ADMIN;
  pd2 = PD2;
  appbuilder = APPBUILDER;
}
