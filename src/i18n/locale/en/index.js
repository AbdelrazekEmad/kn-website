import { default as global } from "./global.json";
import { default as blog } from "./blog.json";
import { default as about } from "./about.json";
import { default as home } from "./home.json";
import { default as contact } from "./contact-us.json";

export default {
  ...global,
  ...blog,
  ...about,
  ...home,
  ...contact,
};
