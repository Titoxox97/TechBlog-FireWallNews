const { Post } = require("../Models");

const postData = [
  {
    title: "1",
    body: "I hear the drums echoing tonight",
    user_id: 1,
  },
  {
    title: "2",
    body: "But she hears only whispers of some quiet conversation",
    user_id: 2,
  },
  {
    title: "3",
    body: "She's coming in twelve-thirty flight",
    user_id: 3,
  },
  {
    title: "4",
    body: "Her moonlit wings reflect the stars that guide me towards salvation",
    user_id: 1,
  },
  {
    title: "5",
    body: "I stopped an old man along the way",
    user_id: 2,
  },
  {
    title: "6",
    body: "Hoping to find some old forgotten words or ancient melodies",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
