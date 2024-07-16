const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./View/Router");

const app = express();

app.use(express.json());
app.use(cors({ credential: true, origin: "http://localhost:3000" }));
app.use("/prep", router);

mongoose
  .connect("mongodb://localhost:27017/CRUD")
  .then(() => {
    console.log("DB Sucessfully Connected");
    app.listen(4000);
  })
  .catch((err) => {
    console.err("DB Error", err);
  });
