const jwt = require("jsonwebtoken");

const responseMessage = require('../config/responseMessage.json');

const authController = {}

authController.login = (req, res) => {
    try {
        let { email, password } = req.body;
        if(email !== "dangerBhai@access.com" && password !== "123@danger"){
            return res.status(401).json({success: false, message: responseMessage[401]});
        }
        //Creating jwt token
        let token;
        token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: "10h" }
        );

        return res.status(200).json({success: true, message: responseMessage[200],token});
    } catch (error) {
        console.log(error);
        return res.status(400).json({success: false, message: responseMessage[400]});
    }
}

authController.verifyUser = (req, res, next) =>{
    try { 
        const { token } = req.body;
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if(decode){
            req.isAuth = true;
        } else {
            req.isAuth = false;
        }
        return res.status(200).json({success: true, message: responseMessage.userVerified ,data: decode});
    } catch (error) {
        console.log("expired",error.message);
        res.status(401).json({success: false, message: responseMessage.tokenExpired });
    }
}

authController.renderLoginPage = (req, res) => {
    res.render('login.html');
}

module.exports = authController;