const router = require("express").Router();
const { response } = require("express");
const { Comment, Post, User } = require("../models");
const excAuth = require("../utils/auth");

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
  Post.findOne({
    include: [{ model: User }],
    raw: true,
  });
  res.render("create-post");
});

router.get("/login", (req, res) => {
  if (req.session.user_id) {
    res.redirect("/");
  }
  res.render("login");
});

router.get("/signup", excAuth, (req, res) => {
  res.render("signup");
});

module.exports = router;
