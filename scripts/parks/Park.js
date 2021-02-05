//creates an export of parkCard that creates the HTML representation of the park when it is selected from the dropdown menu
//will be imported on ParkSelect


//this container will target the modal box
let detailsContainer = document.querySelector(".modal-body")

export function parkCard (parkObject) {
    detailsContainer.innerHTML = `
    <p>${parkObject.description}</p>
    <p>${parkObject.designation}</p>
    <a>Directions: ${parkObject.directionsUrl}</a>
    <a>For more info visit: ${parkObject.url}</a>
    `
    return `
    <div class="card, park-card style="width: 18rem;">
        <div class="card-body">
        <h4 class="card-title">${parkObject.fullName}</h4>
        <h5>${parkObject.addresses[0].city},${parkObject.addresses[0].stateCode}</h5>
        <img class="park-image" src="../images/mountain.jpg" alt="picture-of-mountain" /> <br>
        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Details</a>
    </div>
    </div>
    `
   
}








