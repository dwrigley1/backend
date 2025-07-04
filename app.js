// npm init
// 'enter' through options for default/blank values
// 'yes'
// node app.js -> Listening on port 3000 -> localhost:3000/hello


// setup... this is similar to when we use our default tags in HTML
const express = require("express")

//activate or tells this app variable to be an express server
const app = express()
const router = express.Router()

// start the web server.. app.listen(portnumber, function)
app.listen(3000,function(){
    console.log("Listening on port 3000")
})

// making an api using routes
// routes are used to handle browser requests. They look like URLs. The difference is thsat when a browser requests a route, it is dynamically handled by using a function
// GET or a regular request when someone goes to http://localhost:3000/hello (3000 isn't neccessary, it is the default). 
// When using a function and a route, we almost always have a parameter or handle a response and request

app.get("/hello",function(req,res){
    res.send("<h1>Hello Express</h1>")
})

app.get("/Goodbye",function(req,res){
    res.send("<h1>Goodbye Express!!!</h1>")
})