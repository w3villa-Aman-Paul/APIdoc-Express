const jwt = require("jsonwebtoken");
const path = require('path');

const authController = {}

authController.login = (req, res) => {
    try {
        console.log(req.body);
        let { email, password } = req.body;
        if(email !== "dangerBhai@access.com" && password !== "123@danger"){
            return res.status(401).json({message: "User invalid!"});
        }
        //Creating jwt token
        let token;
        token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // return res.sendFile(path.join(__dirname, "../views/index.html"));
        return res.render('index.html');

    } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'Bad Request!'});
    }
}

authController.verifyUser = (req, res, next) =>{
    try {     
        const { token } = req.body;
        console.log("token---",token)
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decode---",decode);
        console.log(__dirname);
   
        return res.sendFile(path.join(__dirname, "../views/index.html"));
    } catch (error) {
        console.log(error);
    }
}

module.exports = authController;