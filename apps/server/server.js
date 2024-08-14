import express from "express";
import apiRoutes from "./api/api.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb://localhost:27017/?directConnection=true&authSource=mongodb",
  )
  .then(() => {
    console.log("databse connected successfully");
  });

app.listen(3001, () => {
  console.log("srver run on 3001 port");
});

app.use("/reenbit-api", apiRoutes(express.Router));
