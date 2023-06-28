const jwt = require("jsonwebtoken");
const user = require("../models/user");

const authorize = async (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).json("PLEASE LOGIN")
      };

      const authHeader = req.headers.authorization;
      const authToken = authHeader.split(' ')[1];
      

      try {
        if(authToken){
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        req.user = await user.findById(decoded?.id).select('-password');}
        next();
      } catch (err){
        res.status(403)
            .json ({ success: false,
                     message: 'No Token'});
    };
}

module.exports = { authorize };