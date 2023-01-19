const apidocuicontroller = {};

apidocuicontroller.renderDoc = (req, res) => {
    try{
        res.render('index.html');
    } catch(error){
        console.log(error);
    }
}

module.exports = apidocuicontroller;