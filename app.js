const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

require("./model/db");

app.use(cors());
app.use(express.json({ limit: "4.5mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api",require("./router/user"));
app.use("/api",require("./router/category"));
app.use("/api",require("./router/videopost"));
app.use("/api",require("./router/comment"));


app.listen(port, (req, res) => {
  console.log("Server connected");
});
