var searchButton = document.querySelector("#space-theme-button")
var API_KEY = "RyQWSOlqVAzE8LhsWMYNxEQ3aKj0AfzxwB6x5kKC"

searchButton.addEventListener("click", ()=>{
    console.log("button pressed");
    sendNASARequest();
})


async function sendNASARequest(){
    //this apod is hardcoded to one date that definitely has a picutre instead of a video for testing
    var APOD = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2021-04-22`);

    //this apod gets the new image each day, but it may be a video
    //var APOD = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    var apodData = await APOD.json();

    //number of people in space fetch
    var num = await  fetch(`http://api.open-notify.org/astros.json`);
    var astroData = await num.json();

    useNASAData(apodData, astroData);
}

function useNASAData(apodData, astroData){
    var peopleInSpace = astroData.number;

    if (apodData.url.includes("youtube")) {
        alert("Sorry! NASA's astronomy picture of the day is actually a video today. Please try again tomorrow");
    } else  {
        $("body").css("background-image", "url(" + apodData.url + ")");
        $("body").css("background-repeat", "no-repeat");
        $("body").css("background-size", "100% 100%");
        $("#sunrise").html(`There are currently ${peopleInSpace} people in space`);
    
        var elements = document.getElementsByClassName("color");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "transparent";
        }
    
        var elements = document.getElementsByClassName("border-color");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.borderColor = "transparent";
        }

        var elements = document.getElementsByClassName("off-color");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = data.current_color.off_color;
        }
    }
}