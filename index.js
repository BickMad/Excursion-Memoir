
const express = require("express");
const ejs = require("ejs");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { Prohairesis } = require("prohairesis");
const env = require('./env');
mysql = require('mysql');

const db = mysql.createConnection({
host: 'us-cdbr-east-05.cleardb.net',
user: 'be9a5bccf971a1',
password: '0a408364',
database: 'heroku_c50927f03878efc'
});

db.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Successful connected to the DB....`);
    }
  });


const database = new Prohairesis(env.CLEARDB_DATABASE_URL);


const app = express();

app.use(bodyParser.urlencoded({extended : true}));
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
    
    var Username = req.body.Username;
    var Password = req.body.Password
    db.query(
    "SELECT * FROM user WHERE Username = ? AND Password = ?",
    [Username, Password],
     (err, result) => {
         if (err) {
             res.redirect('/login')
         }
        if(result){
            res.redirect('/displayPage')
        } else {
             res.redirect('/login')
         }
     }
     );
     
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
    
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on ${port}'));