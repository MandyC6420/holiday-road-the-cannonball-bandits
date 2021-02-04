import { getEateries, useEateries} from "./EateryProvider.js"



//Creates the HTML to be rendered in eatery div when a restaurant is selected. 
//the eateryObject will end up being used on the eatery object in EaterySelect.js after the change value is matched with the eatery object with the same business name


//query selector that targets the modal box
let detailsContainer = document.querySelector(".modal-body")



export const eateryCard = (eateryObject) => {

   console.log("This should be", eateryObject)
   console.log(eateryObject.description)
  //targets modal box. whatever you want in your modal box goes here. 
   detailsContainer.innerHTML = `
   <h2>Description:${eateryObject.description}</h2>
   `

   

    return `
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title">${eateryObject.businessName}</h4>
    <h5>${eateryObject.city},${eateryObject.state}</h5>
    <img class="eatery-image" src="../images/restaurant-clipart.jpg" alt="drawing-of-restaurant"><br>
    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Details</a>
   </div>
   </div> 


   `
   //<a href=... holds the element identifiers that make it a pop-up (ex. data-toggle)

 
   
  
}




      
         
  
