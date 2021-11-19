const path = require("path");
const express = require("express");
const express_hbs = require("express-handlebars");
const session = require(`express-session`);
const { Sequelize } = require("sequelize/types");

var SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = new Sequelize("comment", "post", "user", {
  dialect: "sqlite",
  storafe: "./session.sqlite",
});

const app = express();
app.use(session());
const PORT = process.env.PORT || 3001;
