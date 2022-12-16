const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Pikaperintä sovellus</h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
