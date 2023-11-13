const express = require("express");
const knex = require("./knex");
const DOG_TABLE = "dogs";

const ExpressServer = () => {
  const app = express();
  app.use(express.json());
  

  // GET

    app.get("/healthcheck", (req, res) => {
      res.sendStatus(200);
    });

    app.get("/dogs", (req, res) => {
        knex
        .select("*")
        .from(DOG_TABLE)
        .orderBy("id")
        .then((result) => {
          res.json(result);
        });
    });

  // POST

  // PATCH

  // DELETE

  return app;
};

module.exports = { ExpressServer };