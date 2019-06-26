const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3010;

app.get("/reviews", (req, res) => {});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Listening on port ${port}!`));
