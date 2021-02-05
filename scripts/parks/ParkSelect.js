import {getParks, useParks} from "./ParkProvider.js"
import {parkCard} from "./Park.js"
import { getWeather, useWeather } from "../weather/WeatherProvider.js"
import {weatherCard} from "../weather/Weather.js"

//reference in HTML where the <select> will be rendered
const contentTarget = document.querySelector(".parks-Dropdown")

//define a function of ParkSelect and get the data for the list of parks
export const ParkSelect = () => {
    getParks().then(() => {
        //get all the parks and save a copy of them locally by defining allTheParks
        let allTheParks = useParks()
       //passing allTheParks into the function of render
        renderParkSelect(allTheParks)
        
    })
}

//.map is the loop that is looping over the array of parksCollection and taking in the parameter of currentParkInLoop
const renderParkSelect = parksCollection => {
    //building the dropdown menu for parks for the DOM
    contentTarget.innerHTML = `
    <select class="dropdown" id="ParkSelectDropdown">
    <option value="">Please select a park...</option>
    ${parksCollection.map((currentParkInLoop) => { 
        return `<option id="park-selected">${currentParkInLoop.fullName}</option>`}

    )}
    </select>`
}


const eventHub = document.querySelector(".parks-Dropdown")

//"change" is the type of event on my addEventListener
//changeEvent is the parameter on my callback function
eventHub.addEventListener("change",(changeEvent) => {
    //console.log("i clicked this park",changeEvent.target.value)
    //declared a variable for the array produced by useParks
    let allTheParks = useParks()
    //looping through the array of allTheParks
    for(const currentParkInLoop of allTheParks){
        //creates a conditional to compare the park name against the changeEvent.target.value
        //if they match, the parkCard function-defined on Park.js that creates the HTML is inserted into the parks.list div and will print in the DOM
        if(currentParkInLoop.fullName === changeEvent.target.value){
        document.querySelector(".parksList").innerHTML = parkCard(currentParkInLoop)
        console.log(currentParkInLoop.addresses[0].postalCode)
        getWeather(currentParkInLoop.addresses[0].postalCode).then(() => {
            let allTheWeather = useWeather()
            let newArray = []
            for(let i=0; i < allTheWeather.length; i++){
                if( (i + 1) % 8 === 0 ){
                    newArray.push(allTheWeather[i])

                }
            }
            console.log(newArray)
            for(const currentWeatherInLoop of newArray) {
            document.querySelector(".parksList").innerHTML += weatherCard(currentWeatherInLoop)
            console.log("this is the weather")
        //call the getWeather function from the WeatherProvider module; pass in a parameter of currentParkInLoop.addresses[0].postalCode so it will target an individual park's zip code
        //use .then() to make sure the function getWeather fetches the data so I can useWeather() to create the parameter for the weatherCard() 
        //which will print the HTML representation of the weather in the DOM in the weatherList div
        
    }})}
}})



    
     
//THIS IS THE WAY I WANT TO DO IT> WITHOUT A LOOP
// //id comes from line 24 above-it matches the id from the dropdown
// if(changeEvent.target.value === "ParkSelectDropdown"){
//     //const parkChosen = changeEvent.target.value
//     document.querySelector(".parksList").innerHTML = 
//     parkCard(changeEvent.target.value)
// }





