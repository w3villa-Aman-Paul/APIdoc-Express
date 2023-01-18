const authentication = {}

authentication.jwtAuth = (req, res, next) => {
    const token = req.headers.token || "token";
    console.log("",token);
    next();
}

module.exports = authentication;