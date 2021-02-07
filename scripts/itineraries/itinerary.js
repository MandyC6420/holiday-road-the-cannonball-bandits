import { getEateries, useEateries } from "../eateries/EateryProvider.js";
import { getParks, useParks} from "../parks/ParkProvider.js"
import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js"
import { saveSelections } from "./itineraryProvider.js";



export const itineraryCard = (itineraryObject) => {
    // let itineraryContainer = document.querySelector(".itinerary-container")

    // itineraryContainer.innerHTML = 
    
    return `
    
    
        <section class="itinerary-card">
        <h5 align="center"><b>Itinerary</b></h5>
        <p><b>Park:</b> ${itineraryObject.park}</p>
        <p><b>Attraction:</b> ${itineraryObject.attraction}</p>
        <p><b>Eatery:</b> ${itineraryObject.eatery}</p>
        </section>
        
    `
}


const saveButton = document.querySelector("#selection-save")

saveButton.addEventListener("click", clickEvent => {
    console.log('click', clickEvent)
    console.log("this is", clickEvent.target.id)
    //     //-----Pulls the name of the selected eatery/park/attraction out of the printed card----
     let eaterySelection = document.getElementById("selected-eatery").innerText;
     let parkSelection = document.getElementById("selected-park").innerText;
     let attractionSelection = document.getElementById("selected-attraction").innerText;
     debugger
    //  console.log(parkSelection)
    //  console.log(eaterySelection)
    

        let eateries = useEateries()
        let savedEatery = eateries.find(e => e.businessName === eaterySelection)

        let parks = useParks()
        let savedPark = parks.find(p => p.fullName === parkSelection)
        
        let attractions = useAttractions()
        let savedAttraction = attractions.find(a => a.name === attractionSelection)
        
        const newItinerary = {
            "eatery": savedEatery.businessName,
            "attraction": savedAttraction.name,
            "park" : savedPark.fullName
               }
        
         saveSelections(newItinerary)
         

    })


//------------------------------------------------------------------



//   //let parks = useParks()
    //   //let savedPark =  parks.find(p => p.fullName === parkSelection)
     
// //  let attractionSelection = document.getElementById("selected-attraction").innerText;
    //  // let parkSelection = document.getElementById("selected-park").innerText;


// export function itineraryDisplay(itineraryObject){

//     return `
//     <p><b>${itineraryObject.eatery}</p>
    
//     `


 //     //let attractions = useAttractions()
    //    //let savedAttraction = attractions.find(a => a.name === attractionSelection)