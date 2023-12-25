const { getAllPlannets } = require('../../models/planets.model');

const httpGetAllPlanets = async (req, res) => {
  res.status(200).json(await getAllPlannets());
};

module.exports = {
  httpGetAllPlanets,
};
