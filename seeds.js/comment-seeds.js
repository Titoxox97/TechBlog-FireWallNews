const { Comment } = require("../Models");

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    body: "Good",
  },
  {
    user_id: 2,
    post_id: 1,
    body: "Bad",
  },
  {
    user_id: 3,
    post_id: 2,
    body: "Medium",
  },
  {
    user_id: 3,
    post_id: 2,
    body: "Amazing",
  },
  {
    user_id: 1,
    post_id: 3,
    body: "Great",
  },
  {
    user_id: 1,
    post_id: 3,
    body: "Terrible",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
