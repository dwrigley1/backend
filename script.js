// we are going to make an event listener.
// it will trigger when the DOM is loaded
// aka upon visiting the wbpage
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html ="" // blank screen
    for (let song of songs){
        html+= `<li>${song.title} - ${song.artist} </li>` //grabs song.title, converts to string, has a dash, grabs song.artist, converts to string
    }

    document.querySelector("#addedsong").innerHTML = html
})