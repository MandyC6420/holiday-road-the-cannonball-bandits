import {Settings} from "../Settings.js"

//created a parksArray where all parks where go
let parksArray = []

//this export defines a function of useParks that uses a copy of the parksArray
export const useParks = () => parksArray.slice()

//this export defines a function
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