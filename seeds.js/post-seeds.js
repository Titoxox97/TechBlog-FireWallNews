const { Post } = require("../Models");

const postData = [
  {
    title: "1",
    post_content: "I hear the drums echoing tonight",
    user_id: 1,
  },
  {
    title: "2",
    post_content: "But she hears only whispers of some quiet conversation",
    user_id: 2,
  },
  {
    title: "3",
    post_content: "She's coming in twelve-thirty flight",
    user_id: 3,
  },
  {
    title: "4",
    post_content:
      "Her moonlit wings reflect the stars that guide me towards salvation",
    user_id: 1,
  },
  {
    title: "5",
    post_content: "I stopped an old man along the way",
    user_id: 2,
  },
  {
    title: "6",
    post_content: "Hoping to find some old forgotten words or ancient melodies",
    user_id: 3,
  },
];

const seedPosts = () => Post.create(postData);

module.exports = seedPosts;
