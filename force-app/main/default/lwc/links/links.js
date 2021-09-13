import { LightningElement } from "lwc";
import linkedin from "@salesforce/resourceUrl/linkedin";
import salesforce from "@salesforce/resourceUrl/salesforce";
import github from "@salesforce/resourceUrl/github";

export default class Links extends LightningElement {
  theIframe;
  IconLinks = {
    github: "https://github.com/Harrysurfing",
    linkedin: "https://www.linkedin.com/in/pinzhi-harry-wang/",
    trailhead: "https://trailblazer.me/id/hwangok"
  };
  linkedinUrl = `${linkedin}#linkedin`;
  salesforceUrl = `${salesforce}#salesforce`;
  githubUrl = `${github}#github`;
}
