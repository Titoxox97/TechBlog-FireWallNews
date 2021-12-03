const { User } = require("../Models");

const userData = [
  {
    username: "User1",
    email: "user1@yahoo.com",
    password: "password1",
  },
  {
    username: "User2",
    email: "user2@yahoo.com",
    password: "password2",
  },
  {
    username: "User3",
    email: "user3@yahoo.com",
    password: "password33",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
