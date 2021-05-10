async function getWeather(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var API_KEY = YOUR KEY HERE;
    var weather = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`);
    var sunrise = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`);
    
    var weatherData = await weather.json();
    var sunriseData = await sunrise.json();
    useWeatherData(weatherData, sunriseData);
}

function useWeatherData(weatherData, sunriseData) {
        var tempC = Math.floor(weatherData.current.temp - 273); //temp is retrieved in kelvin. subtract 273 to get C
        var tempF = Math.floor((tempC * (9/5)) + 32); //convert to F
        var condition = weatherData.current.weather[0].description;
        var sunrise = sunriseData.results.sunrise;
        var sunset = sunriseData.results.sunset;

        $("#app-name-landscape").html(`Now: ${tempF}° & ${condition}`);
        $("#app-name-portrait").html(`Now: ${tempF}° & ${condition}`);
        $("#sunrise").html(`Sunrise: ${sunrise} & Sunset: ${sunset}`);
}
  
  $(document).ready(function() {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather);
        }
    }
    getLocation();
});
