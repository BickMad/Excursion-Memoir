
const express = require("express");
const ejs = require("ejs");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { Prohairesis } = require("prohairesis");
const env = require('./env');
mysql = require('mysql');

const db = mysql.createPool({
host: 'us-cdbr-east-05.cleardb.net',
user: 'be9a5bccf971a1',
password: '0a408364',
database: 'heroku_c50927f03878efc'
});


const database = new Prohairesis(env.CLEARDB_DATABASE_URL);


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
    res.render("displayPage");
});
/*
app.post("/newEntry", (req, res) => {
    let Title = req.body.Title;
    let Date = req.body.Date;
    let textArea = req.body.testArea;
});
*/


app.get("/login", (req, res) => {
    res.render("login");
});
app.post('/login', (req, res) =>{
    var Username = req.body.Username;
    var Password = req.body.Password;

    db.query("SELECT * FROM user WHERE Username = ? AND Password = ?", [Username, Password], function(error, results, fields){
        if(results.length > 0) {
            res.redirect("/");
        } else {
            res.redirect("/login");
        }
        res.end();
    })
});


app.get("/signUp", (req, res) => {
    res.render("signUp");
});
app.post('/signUp', async (req, res) =>{
    const body = req.body;
    await database.execute('INSERT INTO user (Username, Password) VALUES (@Username, @Password)', {
        Username: body.Username,
        Password: body.Password,
    })
    res.redirect("/login");
    
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));