const express = require("express");
const { httpGetAllPlanets } = require("./planets.controller.js");

const plannetsRouter = express.Router();

plannetsRouter.get("/", httpGetAllPlanets);

module.exports = plannetsRouter;
