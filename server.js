const path = require("path");
const express = require("express");
const express_hbs = require("express-handlebars");
const session = require(`express-session`);
const { Sequelize } = require("sequelize/types");
const sequelize = require("./02-Challenge/config/connection");

var SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  session({
    secret: "Top Secret",
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("02-Challenge/routes.js"));

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
