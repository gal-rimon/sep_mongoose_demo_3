const db = require("./db");
const express = require("express");
const app = express();
const port = 5000;
const { generateRouter } = require("./routes/generateRouter");

const ProductModel = require("./models/Product"),
  UserModel = require("./models/User"),
  CategoryModel = require("./models/Category"),
  PostModel = require("./models/Post");

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", generateRouter(ProductModel, ["category"]));
app.use("/users", generateRouter(UserModel));
app.use("/posts", generateRouter(PostModel, ["author"]));
app.use("/categories", generateRouter(CategoryModel));

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
