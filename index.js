const express = require("express");
const ejs = require("ejs");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { Prohairesis } = require("prohairesis");

const mySQLString = '//be9a5bccf971a1:0a408364@us-cdbr-east-05.cleardb.net/heroku_c50927f03878efc?reconnect=true';
const database = new Prohairesis(mySQLString);


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
app.post('/signUp', async (req, res) =>{
    const body = req.body;
    await database.execute('INSERT INTO user (Username, Password) VALUES(@Username, @Password, NOW())', {
        Username: body.Username,
        Password: body.Username
    })
    res.send('added user');
})





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on ${port}'));