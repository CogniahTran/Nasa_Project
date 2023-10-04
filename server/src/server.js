const { createServer } = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetsData } = require("../src/models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://ngoctran180199:Nt01181999@nasa-cluster.hmltfwb.mongodb.net/?retryWrites=true&w=majority";

const server = createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`app running on port: ${PORT}`);
  });
}
startServer();
