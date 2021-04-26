const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");

const Article = require("./model/article");
const ArticleRouter = require("./route/articles");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((err) => {
    throw new error("Oops an error connecting to MongoDB", err);
  });

app.use(methodOverride("_method"));

app.route("/").get(async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: "desc" });
    res.json(articles);
  } catch (e) {
    res.status(400).json("Error: " + err);
  }
});

app.use("/articles", ArticleRouter);

app.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});
