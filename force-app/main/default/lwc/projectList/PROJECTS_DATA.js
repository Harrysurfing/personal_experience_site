import TODOLIST from "@salesforce/resourceUrl/todolisticon";
import SNAKE from "@salesforce/resourceUrl/snakegamecover";
import PAGINATION from "@salesforce/resourceUrl/paginationcover";
import TESLA from "@salesforce/resourceUrl/tesla";
import POKEMON from "@salesforce/resourceUrl/pokemon";
import SCROLL from "@salesforce/resourceUrl/infinitescroll";
import DND from "@salesforce/resourceUrl/dnd";
import AVATARS from "@salesforce/resourceUrl/avatars";
import CAROUSEL from "@salesforce/resourceUrl/carousel";
import ALGO from "@salesforce/resourceUrl/algorithm";

export const LIST = [
  {
    name: "Simple to-do list",
    path: "/to-do-list",
    img: TODOLIST,
    notReady: false
  },
  {
    name: "Arcade Snake Game",
    path: "/snake-game",
    img: SNAKE,
    notReady: false
  },
  {
    name: "Front-end Pagination",
    path: "/page-pagination",
    img: PAGINATION,
    notReady: true
  },
  {
    name: "Rent Your TESLA",
    path: "/rent-your-tesla",
    img: TESLA,
    notReady: false
  },
  {
    name: "Pokémon Search",
    path: "/pokemon-search",
    img: POKEMON,
    notReady: false
  },
  {
    name: "Infinite Scroll",
    path: "/infinite-scroll",
    img: SCROLL,
    notReady: false
  },
  {
    name: "Drag and Drop (dnd)",
    path: "/dnd",
    img: DND,
    notReady: false
  },
  {
    name: "Avatar Maker",
    path: "/avatar-maker",
    img: AVATARS,
    notReady: false
  },
  {
    name: "Custom Carousel",
    path: "/custom-carousel",
    img: CAROUSEL,
    notReady: false
  },
  {
    name: "Algorithm Playground",
    path: "/algo-playground",
    img: ALGO,
    notReady: true
  }
];
