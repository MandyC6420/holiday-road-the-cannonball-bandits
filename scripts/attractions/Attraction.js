import { useAttractions, getAttractions} from "./AttractionProvider.js"

let detailsContainer = document.querySelector(".modal-body")

export const attractionCard = (attractionObject) => {
    console.log("This should be", attractionObject)
    console.log(attractionObject)

    detailsContainer.innerHTML = `
    <h2>Description:${attractionObject}</h2>`


    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title">${attractionObject.name}</h4>
    <h5>${attractionObject},${attractionObject}</h5>
    <img class="eatery-image" src="../images/restaurant-clipart.jpg" alt="drawing-of-restaurant"><br>
    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Details</a>
   </div>
   </div> `
}