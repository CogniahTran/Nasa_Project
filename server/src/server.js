const { createServer } = require('http');
const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '..', '.env'),
});

const app = require('./app');
const { mongoConnect } = require('./services/mongo.js');
const { loadPlanetsData } = require('../src/models/planets.model');
const { loadLaunchData } = require('../src/models/launches.model.js');

const PORT = process.env.port;

const server = createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`app running on port: ${PORT}`);
  });
}

startServer();
