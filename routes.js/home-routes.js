const router = require("express").Router();
const { response } = require("express");
const { Comment, Post, User } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [{ model: User }],
    raw: true,
  })
    .then((dbPostData) => {
      console.log(dbPostData);
      res.render("homepage", { posts: dbPostData });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create-post", (req, res) => {
  res.render("create-post");
});
module.exports = router;
