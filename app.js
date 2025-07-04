// npm init
// 'enter' through options for default/blank values
// 'yes'
// node app.js -> Listening on port 3000 -> localhost:3000/hello


// setup... this is similar to when we use our default tags in HTML
const express = require("express")
var cors = require('cors') // have to use to host frontend & backend on same device

//activate or tells this app variable to be an express server
const app = express()
app.use(cors()) // allows to use cors system to connect backend & frontend
const router = express.Router()


/** commented out because we are using nodemon instead of spinning up the server after each file change 
start the web server.. app.listen(portnumber, function)
app.listen(3000,function(){
    console.log("Listening on port 3000")
}
**/

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

router.get("/songs", (req, res) => {
  const songs = [
    { title: "Uptown Funk", 
        artist: "Bruno Mars" },
    { title: "We Found Love", 
        artist: "Rihanna" },
  ];
  res.json(songs);
});

// all requests that usually use an API start with /api...so the URL would be localhost:3000/api/songs
app.use("/api",router) // this line instructs the script to use the /api URL before using one wihtout it
//app.listen(3000)
// below was added for Glitch
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});