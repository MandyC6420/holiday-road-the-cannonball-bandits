
import { saveSelections } from "./itineraryProvider.js";
import { itineraryList } from "./intineraryList.js";


const saveButtonTarget = document.querySelector(".save-itinerary-container")

export const renderItineraryToSave = (eatery) => {
    
    saveButtonTarget.innerHTML = `
   
    <button class="save-button" id="selection-save">Save Itinerary</button>

        `
}



const eventHub = document.querySelector(".save-itinerary-container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "selection-save") {
       console.log("You clicked", clickEvent)
        let eaterySelection = document.getElementById("selected-eatery").innerHTML;
        console.log(eaterySelection)
        
        const newItinerary = {
            "eatery": eaterySelection,
            "attraction": '',
            "park" : ''
        }
        
     
        console.log(newItinerary)
        saveSelections(newItinerary)
        // // .then(itineraryList)
        
    }
   


})

