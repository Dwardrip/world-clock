
function updateTime() {

    let brusselsElement = document.querySelector("#brussels");
    if (brusselsElement) {
    
        let brusselsDateElement = brusselsElement.querySelector(".date");
        let brusselsTimeElement = brusselsElement.querySelector(".time");
        let brusselsTime = moment().tz("Europe/Brussels");
        brusselsDateElement.innerHTML = brusselsTime .format("Do MMMM YYYY"); 
        brusselsTimeElement.innerHTML = brusselsTime .format("h:mm:ss SSS[<small>]A[</small>]");
    };  
    
let londonElement = document.querySelector("#london");
if (londonElement) {

    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime .format("Do MMMM YYYY"); 
    londonTimeElement.innerHTML = londonTime .format("h:mm:ss SSS[<small>]A[</small>]");
};


let sydneyElement = document.querySelector("#sydney");
if (sydneyElement) {

    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime .format("Do MMMM YYYY"); 
    sydneyTimeElement.innerHTML = sydneyTime .format("h:mm:ss SSS[<small>]A[</small>]");
};
    
    let newYorkElement = document.querySelector("#new-york");
    if(newYorkElement) {

        let newYorkDateElement = newYorkElement.querySelector(".date");
        let newYorkTimeElement = newYorkElement.querySelector(".time");
        let newYorkTime = moment().tz("America/New_York");
        newYorkDateElement.innerHTML = newYorkTime .format("Do MMMM YYYY"); 
        newYorkTimeElement.innerHTML = newYorkTime .format("h:mm:ss SSS[<small>]A[</small>]");
    };

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `    
    <div class="city">
        <div>

            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("Do MMMM YYYY")} </div>
        </div>
        <div class="time"> ${cityTime.format("h:mm")} <small>${cityTime.format("A")} </small></div>
    </div>
    <a href="index.html">All Cities</a>`;
    
}

updateTime();
setInterval(updateTime, 1);





let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

