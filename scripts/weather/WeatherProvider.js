import {settings} from "../Settings.js"


//created a weatherArray where all the weather data will go
let weatherArray = []

//this export defines a function of useWeather that uses a copy of the weatherArray
export const useWeather = () => weatherArray.slice()




//this export deinfes a function of getWeather
//fetches data about the weather from an API
// the first .then converts the data from JSON into javascript
// the second .then tells the data where to go
export const getWeather = (zipCode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&exclude:currently,minutely,hourly,alerts&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
               // console.log(parsedWeather.list)
                weatherArray = parsedWeather.list
                console.log(weatherArray)
            }
        )
    }


 

