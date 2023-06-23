const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../models/user");

const protect = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json("PLEASE LOGIN");
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.user = await user.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json("invalid auth token");
  }
};

module.exports = { protect };
