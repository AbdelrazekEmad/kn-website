import { default as global } from "./global.json";
import { default as blog } from "./blog.json";
import { default as about } from "./about.json";
import { default as home } from "./home.json";

export default {
  ...global,
  ...blog,
  ...about,
  ...home
};
