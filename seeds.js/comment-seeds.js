const { Comment } = require("../Models");

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Good",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Bad",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "Medium",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "Amazing",
  },
  {
    user_id: 1,
    post_id: 3,
    comment_text: "Great",
  },
  {
    user_id: 1,
    post_id: 3,
    comment_text: "Terrible",
  },
];

const seedComments = () => Comment.create(commentData);

module.exports = seedComments;
