const express = require("express");
const ejs = require("ejs");
var mysql = require("mysql");
const morgan = require('morgan');
const bodyParser = require('body-parser');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Halothane2214$',
	database : 'nodelogin'
});

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

app.set("view engine", "ejs");



app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/displayPage", (req, res) => {
    res.render("displayPage");
});

app.get("/newEntry", (req, res) => {
    res.render("newEntry");
});




app.get("/login", (req, res) => {
    res.render("login");
});
app.post('/login', (req, res) =>{

});


app.get("/signUp", (req, res) => {
    res.render("signUp");
});
app.post('/signUp', (req, res) =>{
    console.log(req.body);
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on ${port}'));