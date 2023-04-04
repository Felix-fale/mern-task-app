const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Bonjour, monde !");
// });

app.listen(PORT, () => {
  console.log(
    `Le serveur est en cours d'exécution sur http://localhost:${PORT}`
  );
});
