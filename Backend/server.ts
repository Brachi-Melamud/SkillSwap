import express from "express";
import cors from "cors";
import config from "./utils/config";
import catchAll from "./middleware/catch_all.js";
import routeNotFound from "./middleware/route_not_found.js";
// import vacationController from "./routes/vacationController";
import userController from "./route/userController.js";


const server = express();
server.use(cors());
server.use(express.json());
// server.use("/", vacationController);
server.use("/", userController);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(config.port, () =>
  console.log("Listening on http://localhost:" + config.port)
);