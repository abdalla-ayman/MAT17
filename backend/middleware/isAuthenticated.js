const getUserMiddleware = async (req, res, next) => {
  try {
    if (!req.user) return res.status(401).json("login first!");
    else next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserMiddleware;
