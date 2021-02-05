//this module fetches the array of parks from the National Parks API

//gets the key from the settings file to use in the fetch for the API
import {Settings} from "../Settings.js"

//created a parksArray where all parks will go
let parksArray = []

//this export defines a function of useParks that uses a copy of the parksArray
export const useParks = () => parksArray.slice()

//this export defines a function of getParks, gathers info from the API
//the first .then converts the JSON string into Javascript data
//the second .then tells you where to put the data, back in the parksArray
export const getParks = () => { 
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${Settings.npsKey}`
            
            )
        .then(response => response.json())
        .then(
            parsedParks => {
                console.log(parsedParks.data)
                parksArray = parsedParks.data
            }
        )
    }