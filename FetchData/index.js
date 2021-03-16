// Write an asynchronous function that accepts 1 parameter
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:

// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test
// (Note: the API will only allow you 2 calls per second, so if you are getting errors and you think you shouldn't be, 
// try calling fetching only ONCE per execution.)

async function cityData(){
    let cityName = document.getElementById("search").value; //allows the cityName to equal the value in the search bar
    let response = await fetch("https://geocode.xyz/" + cityName + "?json=1"); //if the function's response is a promise, you must await it to get the result
    let data = await response.json(); //this function's response is also a promise, so you must await.

    let longitude = data.longt; //fetching specifically the longitude
    let latitude = data.latt; //fetching specifically the latitude
    
    console.log(longitude +"," + latitude); //printing the long. and lat. in the console
  
}
