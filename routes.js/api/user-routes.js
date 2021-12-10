const router = require("express").Router();
const excAuth = require("../../utils/auth");

const { User, Post, Comment } = require("../../models");

// *create a user route
router.post("/", excAuth, (req, res) => {
  User.create({ ...req.body, userId: req.session.user_id })
    .then((res) => res.json(res))
    .catch((err) => res.status(500).json(err));
});

// *update user route by user id
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No user was found matching this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// *delete user route
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// *login route
router.post("/login", (req, res) => {
  User.findOne({
    where: { username: req.body.username },
  }).then((res) => {
    if (!res) {
      res
        .status(400)
        .json({ message: "User does not exist with this username" });
      return;
    }
    const validPw = res.confirmPass(req.body.password);
    if (!validPw) {
      res.status(400).json({ message: "Invalid password" });
      return;
    }
  });
});
// *logout route

module.exports = router;
