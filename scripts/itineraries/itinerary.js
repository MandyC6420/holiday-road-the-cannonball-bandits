import { getEateries, useEateries } from "../eateries/EateryProvider.js";
import { saveSelections } from "./itineraryProvider.js";

const saveButton = document.querySelector("#selection-save")

saveButton.addEventListener("click", clickEvent => {
    console.log('click', clickEvent)
    console.log("this is", clickEvent.target.id)
    //     //-----Pulls the name of the selected eatery/park/attraction out of the printed card----
     let eaterySelection = document.getElementById("selected-eatery").innerText;
     console.log(eaterySelection)
    

        let eateries = useEateries()
        console.log(eateries)
        let savedEatery = eateries.find(e => e.businessName === eaterySelection)
        
    
        console.log(savedEatery)
        const newItinerary = {
            "eatery": savedEatery.businessName,
            "attraction": '',
            "park" : ''
                    }
         console.log(newItinerary)           
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