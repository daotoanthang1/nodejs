const express = require("express");

const app = express();

const port = 3001;

const bodyParser = require("body-parser");

var userRoute = require("./routes/user.route")

var db = require("./db")



app.set('view engine', 'pug');

app.set('views', './views');


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/",function(req,res){
    res.render("index",{
        name:"Checker"
    })
})
app.use(express.static('public'));
app.use("/users",userRoute)
app.listen(port,()=>{
    console.log("Server listening on port" + port);
})