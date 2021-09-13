import { LightningElement } from "lwc";
import PD1 from "@salesforce/resourceUrl/pd1";
import JS from "@salesforce/resourceUrl/js";
import ADMIN from "@salesforce/resourceUrl/admin";
import NODE from "@salesforce/resourceUrl/node";
import LWC from "@salesforce/resourceUrl/udemylwc";
import PYTHON from "@salesforce/resourceUrl/python";
import SASS from "@salesforce/resourceUrl/csssass";

export default class Certification extends LightningElement {
  js = JS;
  pd1 = PD1;
  admin = ADMIN;
  lwc = LWC;
  node = NODE;
  sass = SASS;
  python = PYTHON;
}
