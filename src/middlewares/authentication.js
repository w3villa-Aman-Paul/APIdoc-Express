const jwt = require("jsonwebtoken");
const authentication = {};

authentication.jwtAuth = (req, res, next) => {
    try { 
        const { token } = req.body;
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.isAuth = true;
        return res.status(200).json({success: true, message:"user verified!" ,data: decode});
    } catch (error) {
        console.log("expired",error.message);
        req.isAuth = false;
        res.status(401).json({success: false,message: "token expired!"});
    }
}

module.exports = authentication;