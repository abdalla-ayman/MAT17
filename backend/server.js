const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

//connect to db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("mongodb_err", err));

//setting middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//setting routes
app.use("/auth", require("./routes/users/auth"));
app.use("/employees", require("./routes/employees"));

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`server is running on port ${Port}`));