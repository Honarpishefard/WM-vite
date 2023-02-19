const express = require("express");
const server = express();
const appRootPath = require("app-root-path");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({
  path: appRootPath + "/.env",
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
mongoose
  .connect("mongodb://127.0.0.1:27017/W&M")
  .then(console.log("DB connected"));
var db = null;
mongoose.connect("mongodb://127.0.0.1:27017/W&M", function (err, ldb) {
  db = ldb;
  console.log("DB connected");
});

server.use(cors());
server.use(express.json({ extended: false }));
server.use("/api", require("./routes").router);

const handleMainRoute = (req, res) => {
  res.json({ home: "hello" });
};

server.get("/", handleMainRoute);

server.get("/api/products", function (req, res) {
  db.collection("products")
    .find()
    .toArray(function (err, result) {
      res.send(result);
    });
});
