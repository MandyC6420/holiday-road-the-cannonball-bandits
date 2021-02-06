import { getSelections, useSelections, saveSelections } from "./itineraryProvider.js"
import { itineraryCard } from "./itinerary.js"

let itineraryContainer = document.querySelector(".itinerary-container")

export function itineraryList(){
    getSelections().then(() =>{

        let savedItineraries = useSelections()
        let itineraryHTML = ''
    
        for(const currentItinerary of savedItineraries) {
            itineraryHTML = itineraryCard(currentItinerary)
        }
      
      



    })
    


}








