import express from "express";
import apiRoutes from "./api/api.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  }),
);

app.use(express.json());

const dbURI =
  "mongodb://localhost:27017/?directConnection=true&authSource=mongodb";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });

app.listen(3001, () => {
  console.log("srver run on 3001 port");
});

app.use("/reenbit-api", apiRoutes(express.Router));
