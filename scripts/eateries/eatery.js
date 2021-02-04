import { getEateries, useEateries} from "./EateryProvider.js"



//Creates the HTML to be rendered in eatery div when a restaurant is selected. 
//the eateryObject will end up being used on the eatery object in EaterySelect.js after the change value is matched with the eatery object with the same business name


//query selector that targets the modal box
let detailsContainer = document.querySelector(".modal-body")



export const eateryCard = (eateryObject) => {

   console.log("This should be", eateryObject)
   console.log(eateryObject.ameneties.wheelchairAccessible)
//converts boolean in data set to a string of "yes" or "no" to be displayed in the description modal
   let wheelchair =''
   let pets =''
   let wifi = ''
   let diaperChange =''
   let playground =''
   let restrooms = ''

   if(eateryObject.ameneties.wheelchairAccessible === true){
      wheelchair = "Yes"
   }
   else{
      wheelchair = "No"
   }
   if(eateryObject.ameneties.petFriendly === true){
      pets = "Yes"
   }
   else{
      pets = "No"
   }
   if(eateryObject.ameneties.wifi === true){
      wifi = "Yes"
   }
   else{
      wifi = "No"
   }
   if(eateryObject.ameneties.diaperFacility === true){
      diaperChange = "Yes"
   }
   else{
      diaperChange = "No"
   }
   if(eateryObject.ameneties.playground === true){
      playground = "Yes"
   }
   else{
      playground = "No"
   }
   if(eateryObject.ameneties.restrooms === true){
      restrooms = "Yes"
   }
   else{
      restrooms = "No"
   }

  //targets modal box; details you want printed go here.

   detailsContainer.innerHTML = `
   <p><b>Description</b> ${eateryObject.description}</p>
   <p><b>Wheelchair Accessible</b> ${wheelchair}<p>
   <p><b>Pet-Friendly</b> ${pets}</p>
   <p><b>Wi-fi</b> ${wifi}</p>
   <p><b>Diaper Change Facilities</b> ${diaperChange}</p>
   <p><b>Playground</b> ${playground}</p>
   <p><b>Restrooms</b> ${restrooms} </p>

   `
//returns html to render eatery card when a restaurant is selected from dropdown
   

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




      
         
  
