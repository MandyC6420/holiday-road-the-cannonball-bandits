import { getSelections, useSelections, saveSelections } from "./itineraryProvider.js"
import { itineraryCard } from "./itinerary.js"

let itineraryContainer = document.querySelector(".itinerary-container")

export function itineraryList(){
    getSelections().then(() =>{

        let savedItineraries = useSelections()
        let itineraryHTML = ''
    //PRINTS LAST ITINERARY OBJECT
        const lastItem = savedItineraries[savedItineraries.length - 1]
        // console.log(lastItem)
        itineraryHTML = itineraryCard(lastItem)
        itineraryContainer.innerHTML += itineraryHTML
       
    
        //THIS WILL PRINT ALL ITINERARY OBJECTS
        // for(let currentItinerary of savedItineraries) {
        //     itineraryHTML += itineraryCard(currentItinerary)
        //     console.log(itineraryHTML)
            
        // }
      
        // itineraryContainer.innerHTML = `
        // ${itineraryHTML}
        
        // `


    })
    


}








