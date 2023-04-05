const doteenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Le serveur est en cours d'exécution sur http://localhost:${PORT}`
  );
});
