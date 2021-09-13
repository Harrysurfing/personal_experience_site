import REVOLENT from "@salesforce/resourceUrl/revolent";
import TQUILA from "@salesforce/resourceUrl/tquila";
import CURECANCER from "@salesforce/resourceUrl/curecancer";
import VEVEY from "@salesforce/resourceUrl/vevey";
import MAVERIK from "@salesforce/resourceUrl/maverik";

export const Employment = [
  {
    id: 1,
    title: "Salesforce Developer",
    place: "Revolent Group",
    time: "Aug 2020 - Present",
    details: [
      "3x Salesforce Certified – Administrator, Platform Developer 1 and Javascript 1.",
      "Developed reports and dashboards to visually enhance complex data sets.",
      "Created profiles, sharing rules and role hierarchies to enhance org’s security.",
      "Developed Apex classes with at least 75% test coverage and triggers with at least 1% test coverage. Also developed Visualforce pages.",
      "Lightning web component development using VScode with SFDX."
    ],
    logo: REVOLENT
  },
  {
    id: 5,
    title: "Client work: Mav3rik",
    place: "Mav3rik",
    time: "Apr 2021 - Present",
    details: [
      "Currently working at Mav3rik as a Salesforce Developer",
      "Maintain existing code base and develop, test code based on requirements from Primesafe project"
    ],
    logo: MAVERIK
  },

  {
    id: 2,
    title: "Client work: Tquila ANZ",
    place: "Tquila ANZ",
    time: "Feb 2021 - Mar 2021",
    details: [
      "Reviewed, designed and coded Lightning Web Component and CSS stylesheet for ALDI community page.",
      "Created flows, custom meta-data types, custom objects in dev org following business needs and deployed via source control (bitbucket).",
      "Designed and developed Lightning Web Component demo for ACFS Salesforce Community pages.",
      "Developed Apex test classes to help improve code coverage from 53% to 86% within short deadline."
    ],
    logo: TQUILA
  },
  {
    id: 3,
    title: "Client work: Cure Cancer Australia",
    place: "Cure Cancer Australia",
    time: "Nov 2020 - Dec 2020",
    details: [
      "Discover, plan, design and present solutions for Cure Cancer Australia During the non-for-profit project.",
      "Reviewed existing code to find dependencies and to understand the unmaintained code base. ",
      "Provided solutions and recommendations for Apex classes optimisations, query optimisations, process builder optimisations and code coverage improvements."
    ],
    logo: CURECANCER
  },

  {
    id: 4,
    title: "Software & Network Engineer",
    place: "Vevey Group",
    time: "Mar 2018 - Aug 2020",
    details: [
      "Website development. (Javascript, HTML, CSS, React).",
      "Sever side development and optimisation (Perl, Mason).",
      "Integration and automation (SOAP/REST API).",
      "Network troubleshooting and hardware configuration."
    ],
    logo: VEVEY
  }
];
