const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

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



app.get("/signUp", (req, res) => {
    res.render("signUp");
});
app.post('/signUp', (req, res) =>{

});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on ${port}'));