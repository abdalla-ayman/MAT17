const jwt = require("jsonwebtoken");
const User = require("../models/user");

const getUserMiddleware = async (req, res, next) => {
  try {
    let token = req.headers.authToken;

    if (!token) return next();

    let decodedToken = jwt.decode(token);

    let user = await User.findById(decodedToken.id);
    if (user) req.user = user;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserMiddleware;
