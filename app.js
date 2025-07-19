// npm init
// 'enter' through options for default/blank values
// 'yes'
// node app.js -> Listening on port 3000 -> localhost:3000/hello

// setup... this is similar to when we use our default tags in HTML

const express = require("express")
var cors = require('cors') // have to use to host frontend & backend on same device
const bodyParser = require('body-parser')// new code added for MongoDB integration //
const Song = require("./models/songs")
const app = express() //activate or tells this app variable to be an express server
app.use(cors()) // allows to use cors system to connect backend & frontend
app.use(bodyParser.json())
const router = express.Router()

// grab all the songs in a database
router.get("/songs", async(req,res) =>{
  try{
    const songs = await Song.find({}) // try to find a song, when found, await
    res.send(songs)
    console.log(songs)
  }
  catch (err){
    console.log(err)
  }
})

router.post("/songs", async(req,res)=>{
  try{
    const song = await new Song(req.body)
    await song.save()
    res.status(201).json(song)
    console.log(song)
  }
  catch(err){
    res.status(400).send(err)
  }
})
  // to find all songs in a database, just use find() that is built in to Mongoose
  /** 
  Song.find(query,function(err,songs){
    if(err){
      res.status(400).send(err)
    }
    else{
      res.json(songs)
    }
  })
    **/

/** commented out because we are using nodemon instead of spinning up the server after each file change 
start the web server.. app.listen(portnumber, function) **/
app.listen(3000,function(){
    console.log("Listening on port 3000")
})

// making an api using routes
// routes are used to handle browser requests. They look like URLs. The difference is thsat when a browser requests a route, it is dynamically handled by using a function
// GET or a regular request when someone goes to http://localhost:3000/hello (3000 isn't neccessary, it is the default). 
// When using a function and a route, we almost always have a parameter or handle a response and request

router.get("/songs", (req, res) => {
  const songs = [
    { title: "Uptown Funk", 
        artist: "Bruno Mars" },
    { title: "We Found Love", 
        artist: "Rihanna" },
  ];
  res.json(songs);
});

// below was added for Glitch
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
  //console.log(` Server running on port ${PORT}`);
//});

// all requests that usually use an API start with /api...so the URL would be localhost:3000/api/songs

app.use("/api",router) // this line instructs the script to use the /api URL before using one wihtout it
//app.listen(3000)