const express = require("express");
const { connection } = require("./config/db");
const { olxController } = require("./routes/olx.routes");

const app = express();
const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/classifieds", olxController);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
  console.log("Server listening on", port);
});
