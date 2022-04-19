const express = require("express");
const connect = require("./config/connect");
const contactRoutes = require("./routes/contact");
const app = express();
require("dotenv").config();
connect();

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.listen(process.env.port, () =>
  console.log(`port is running ${process.env.port}`)
);
