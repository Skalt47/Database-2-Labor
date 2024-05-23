const express = require("express");
const app = express(); // Remove the extra parentheses
const PORT = 8080;

app.use(express.json());
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "Shirt",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  } else {
    // Add an else clause to avoid sending two responses
    res.send({
      tshirt: `shirt with your is ${logo}`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
