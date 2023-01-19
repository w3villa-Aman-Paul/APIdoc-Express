jsonController = {};

jsonController.jsonFile = (req, res) => {
    try {
        const apiJson = require('../json/api.json');
        res.send(apiJson);
    } catch (error) {
        console.log(error);
    }
}

module.exports = jsonController;