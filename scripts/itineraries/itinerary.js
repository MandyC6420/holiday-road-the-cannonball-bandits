import { getEateries, useEateries } from "../eateries/EateryProvider.js";
import { saveSelections } from "./itineraryProvider.js";
// import { itineraryList } from "./intineraryList.js"


export const itineraryCard = (itineraryObject) => {
    let itineraryContainer = document.querySelector(".itinerary-container")

    itineraryContainer.innerHTML = `
    
    
        <section class="itinerary-card">
        <h5>Itinerary</h5>
        <p><b>Park:</b> ${itineraryObject.park}</p>
        <p><b>Attraction:</b> ${itineraryObject.attraction}</p>
        <p><b>Eatery:</b> ${itineraryObject.eatery}</p>
        
    `
        

   
}





const saveButton = document.querySelector("#selection-save")

saveButton.addEventListener("click", clickEvent => {
    console.log('click', clickEvent)
    console.log("this is", clickEvent.target.id)
    //     //-----Pulls the name of the selected eatery/park/attraction out of the printed card----
     let eaterySelection = document.getElementById("selected-eatery").innerText;
    

        let eateries = useEateries()
        let savedEatery = eateries.find(e => e.businessName === eaterySelection)
        
    
        console.log(savedEatery)
        const newItinerary = {
            "eatery": savedEatery.businessName,
            "attraction": '',
            "park" : ''
                    }
        //  itineraryList(newItinerary)
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