"use strict";
import express from "express";
import ejs from "ejs";
import _ from "lodash";
import bodyParser from "body-parser";

import { products } from "./models/products.js";
import reviews from "./models/reviews.js";
import recipes from "./models/recipes.js";
import mujmalRecipes from "./models/mujmalRecipes.js";
import profiles from "./models/profiles.js";

let num = 0;

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const port = 3000;

app.get("/", (req, res) => {
  res.render("home", {
    products: products,
    recipes: recipes,
    reviews: reviews,
    product: 0,
    num: 0,
  });
});

let ims = [
  {
    name: "me",
  },
  {
    name: "me",
  },
  {
    name: "me",
  },
  {
    name: "me",
  },
  {
    name: "me",
  },
]

// products respon
app.get("/products", (req, res) => {
  res.render("pages/products" , {
    ims: ims,
  });
});

// recipes respon
app.get("/recipes", (req, res) => {
  res.render("pages/recipes" , {
    recipes: recipes, num: 1, mRecipes: mujmalRecipes,
  });
});

app.get("/mission", (req, res) => {
  res.render("pages/mission");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/profiles", (req, res) => {
  res.render("pages/profiles");
});

app.listen(process.env.PORT || port, (req, res) => {
  console.log(`server is running at route ${port}`);
});
