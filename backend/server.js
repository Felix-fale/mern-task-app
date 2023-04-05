const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`MongoDB Connected`);
    app.listen(PORT, () => {
      console.log(
        `Le serveur est en cours d'exécution sur http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => console.log(err));

// .then() joue le même role que try() ?
