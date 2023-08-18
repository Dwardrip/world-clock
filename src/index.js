function updateTime() {

    
    
    let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime .format("Do MMMM YYYY"); 
londonTimeElement.innerHTML = londonTime .format("h:mm:ss SSS[<small>]A[</small>]");


let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = sydneyTime .format("Do MMMM YYYY"); 
sydneyTimeElement.innerHTML = sydneyTime .format("h:mm:ss SSS [<small>]A[</small>]");

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");
newYorkDateElement.innerHTML = newYorkTime .format("Do MMMM YYYY"); 
newYorkTimeElement.innerHTML = newYorkTime .format("h:mm:ss SSS [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1);
