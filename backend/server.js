const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, () => {
  console.log(
    `Le serveur est en cours d'exécution sur http://localhost:${PORT}`
  );
});
