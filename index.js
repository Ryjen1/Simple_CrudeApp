const express = require("express");
const route = require("./route/product.route");
const mongoose = require("mongoose");
const port = 4000;
const app = express();

app.use(express.json());
app.use("/api/products", route);

mongoose
  .connect(
    "mongodb+srv://marijayne1001:pGLj3KxHBbus84h5@backend.zvtuqou.mongodb.net/Node-Testing"
  )
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log("server connected");
    });
  });

app.get("/", (req, res) => {
  res.send("Hey from API");
});
