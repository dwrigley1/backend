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

router.get("/songs/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).send("Song not found");
    }
    res.send(song);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

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

// put request updates an existing record database entry
// app.js
router.put("/songs/:id", async (req, res) => {
  try {
    const song = req.body;
    await Song.updateOne({ _id: req.params.id }, song);
    console.log("Updated:", song);
    res.sendStatus(204); // 204 = No Content, meaning success
  } catch (err) {
    console.error("Update error:", err);
    res.status(400).send(err);
  }
});

router.delete("/songs/:id", async(req,res) =>{
  // method or function in Mongoose/Mongo to delete a single instance of a song or object
  try{
    Song.deleteOne({_id: req.params.id})
  }
  catch(err){
    res.status(400).send(err)
  }
})


// the slash is in the URL


app.listen(3000,function(){
    console.log("Listening on port 3000")
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


app.use("/api",router) // this line instructs the script to use the /api URL before using one wihtout it

// below was added for Glitch
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
  //console.log(` Server running on port ${PORT}`);
//});

