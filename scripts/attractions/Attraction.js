let detailsContainer = document.querySelector(".modal-body")

export const attractionCard = (attractionObject) => {
    console.log("This should be the name of the attraction", attractionObject.name)
    console.log("This should be the description of the attraction", attractionObject.description)

    detailsContainer.innerHTML = `
    <h1>Description of Attraction Selected:</h1>
    
    <h3>${attractionObject.description}</h3>`


    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title">${attractionObject.name}</h4>
    <h5>${attractionObject.city},${attractionObject.state}</h5>
    <img class="eatery-image" src="../images/attraction-clipart.jpg" alt="drawing-of-attraction"><br>
    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Details</a>
   </div>
   </div> `
}