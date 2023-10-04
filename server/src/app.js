const path = require("path");
const express = require("express");
const plannetsRouter = require("./routes/planets/planets.router.js");
const launchesRouter = require("./routes/launches/launches.router.js");

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/planets", plannetsRouter);
app.use("/launches", launchesRouter);

app.get("/*", (req, res) => {
  res.send(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
