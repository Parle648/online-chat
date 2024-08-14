import express from "express";
import apiRoutes from "./api/api.js";

const app = express();

app.use(express.json());

app.listen(3001, () => {
  console.log("srver run on 3001 port");
});

app.use("/reenbit-api", apiRoutes(express.Router));
