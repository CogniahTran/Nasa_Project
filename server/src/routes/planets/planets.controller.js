const {
  getAllPlannets,
} = require("/Users/macintosh/Desktop/Web-development/NASA_PROJECT/server/src/models/planets.model.js");

const httpGetAllPlanets = async (req, res) => {
  res.status(200).json(await getAllPlannets());
};

module.exports = {
  httpGetAllPlanets,
};
