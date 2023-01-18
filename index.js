const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const createError = require('http-errors');
require('dotenv').config()

const entryRouter = require('./src/routes/index');
const PORT = process.env.PORT || 3000;

const views_path = path.join(__dirname, '/src/views');
const static_path = path.join(__dirname, '/public');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(static_path));

app.use('/', entryRouter);

//view engine setup
app.set("views",views_path);
app.set("view engine", "ejs");

//render HTML files
app.engine('html', require('ejs').renderFile);

//catch $)$ and forward to error handler
app.use((req, res, next) => {
	next(new createError.NotFound());
})

//error handler
app.use((err, req, res, next) => {
	res.status( err.status || 500);
	res.render('error.html', {err})
})

app.listen(PORT, function(err){
	if(err) console.log(err);
	console.log("Server listening on PORT", PORT);
});