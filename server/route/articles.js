const express = require("express");
const Article = require("../model/article");
const router = express.Router();

router.route("/edit/:id").get(async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (e) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/:slug").get(async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    res.json(article);
  } catch (e) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/new").post((req, res) => {
  req.article = new Article();
  let article = req.article;
  article.title = req.body.title;
  article.description = req.body.description;
  article.markdown = req.body.markdown;

  article
    .save()
    .then(() => res.json("Blog added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("edit/:id").put(async (req, res, next) => {
  req.article = await Article.findById(req.params.id);

  article.title = req.body.title;
  article.description = req.body.description;
  article.markdown = req.body.markdown;

  article
    .save()
    .then(() => res.json("Blog added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("Blog Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;
    try {
      article = await article.save();
      res.json("Blog added");
    } catch (e) {
      res.status(400).json("Error: " + err);
    }
  };
}

module.exports = router;
