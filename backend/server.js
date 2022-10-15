const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const getUserMiddleware = require("./middleware/getUserMiddeware");
const isAuthenticated = require("./middleware/isAuthenticated");

//connect to db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("mongodb_err", err));

//setting middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//auth related Middleware

app.use(getUserMiddleware);
app.use("/employee", isAuthenticated);
app.use("/vacation", isAuthenticated);

//setting routes

app.use("/auth", require("./routes/users/auth"));
app.use("/employee", require("./routes/employees/employees"));
app.use("/vacation", require("./routes/vacation/vacation"));
app.use("/complaint", require("./routes/complaints"));

//validate token
app.get("/authenticate", isAuthenticated, (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    console.log(error)
  }
});

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`server is running on port ${Port}`));
