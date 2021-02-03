import { getEateries, useEateries} from "./EateryProvider.js"



//Creates the HTML to be rendered in eatery div when a restaurant is selected. 
//the eateryObject will end up being used on the eatery object in EaterySelect.js after the change value is matched with the eatery object with the same business name

let detailsContainer = document.querySelector(".modal-body")



export const eateryCard = (eateryObject) => {

   console.log("This should be", eateryObject)
   console.log(eateryObject.description)
   detailsContainer.innerHTML = `
   <h2>Description:${eateryObject.description}</h2>
   `

   

    return `
    
    <h2>${eateryObject.businessName}</h2>
    <h4>${eateryObject.city},${eateryObject.state}</h4>
    <img class="eatery-image" src="../images/restaurant-clipart.jpg" alt="drawing-of-restaurant">
    <button type="button" class="details-button" data-toggle="modal" data-target="#myModal">Details</button>

   `

 
   
  
}




      
         
  
