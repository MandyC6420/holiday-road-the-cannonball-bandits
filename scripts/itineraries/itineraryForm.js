
import { saveSelections } from "./itineraryProvider.js";
import { itineraryList } from "./intineraryList.js";
import { getEateries, useEateries } from "../eateries/EateryProvider.js";
//import { eateryCard } from "../eateries/eatery.js"


const saveButtonTarget = document.querySelector(".save-itinerary-container")

export const renderItineraryToSave = (eatery) => {
    
    saveButtonTarget.innerHTML = `
   
    <button class="save-button" id="selection-save">Save Itinerary</button>

        `
}



const eventHub = document.querySelector(".save-itinerary-container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "selection-save") {
        //-----Pulls the name of the selected eatery/park/attraction out of the printed card----
        let eaterySelection = document.getElementById("selected-eatery").innerText;
    //  let attractionSelection = document.getElementById("selected-attraction").innerText;
     // let parkSelection = document.getElementById("selected-park").innerText;

        let eateries = useEateries()
        let savedEatery = eateries.find(e => e.businessName === eaterySelection)

        //let attractions = useAttractions()
       //let savedAttraction = attractions.find(a => a.name === attractionSelection)

      //let parks = useParks()
      //let savedPark =  parks.find(p => p.fullName === parkSelection)
     
    
        console.log(savedEatery)
        const newItinerary = {
            "eatery": savedEatery,
            "attraction": '',
            "park" : ''
                    }
        saveSelections(newItinerary)




    //    console.log("You clicked", clickEvent)
    //    let eaterySelection = document.getElementById("selected-eatery").innerText;
    //    let eateries = useEateries()
    //    for(const eatery of eateries){ //reference select pages for attractions and parks
    //     if(eatery.businessName === eaterySelection){
    //         // console.log(eatery)
    //         const newItinerary = {
    //             "eatery": eatery,
    //             "attraction": '',
    //             "park" : ''
    //         }
    //         // console.log(newItinerary)
    //         saveSelections(newItinerary)
            
    //     } 
    // }


}
   


})



// let eatery =useEateries().find(eaterySelection)


        // let eaterySelection = document.getElementById("selected-eatery").innerText;
        // console.log(eaterySelection)
        
        // const newItinerary = {
        //     "eatery": eaterySelection,
        //     "attraction": '',
        //     "park" : ''
        // }
        
     
        // console.log(newItinerary)
        // saveSelections(newItinerary)
        // // .then(itineraryList)
        


