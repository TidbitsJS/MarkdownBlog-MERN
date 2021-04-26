const express = require("express");
const Article = require("../model/article");
const router = express.Router();

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

router.route("/edit/:id").put((req, res) => {
  Article.findById(req.params.id)
    .then((article) => {
      article.title = req.body.title;
      article.description = req.body.description;
      article.markdown = req.body.markdown;

      article
        .save()
        .then(() => res.json("Blog updated"))
        .catch((err) => res.status(400).json("Error:  " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("Blog Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
