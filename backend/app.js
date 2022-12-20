const express = require("express");
const morgan = require("morgan");
const app = express();

// middleware

app.use(morgan("dev"));

app.use(express.json());

// routes

app.use("/categories", require("./routing/category.routing"));

app.use("/notes", require("./routing/note.routing"));

//app.use("/users", require("./routing/user.routing"));

module.exports = app;
