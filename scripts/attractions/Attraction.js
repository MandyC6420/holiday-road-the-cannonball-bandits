//building an html representation of data needed from the attractionCollection

export const attraction = (aName) => {
  return `
     
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${aName}</h5>
  
  <img class="attraction-image" src="../images/attraction-clipart.jpg" alt="world attractions">
  <button id="attractionDetailsButton">Details</button>
  </div>`;
};

export const attractionDetails = (aName) => {
  let attractionHTML = `
    <section class="attraction-preview">
    <p>${aName.city}, ${aName.state}</p>
    <p>Souvenirs: ${aName.ameneties.souvenirs} </p>
    <p>Restrooms: ${aName.ameneties.restrooms}</p>
    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Details</a>
    </section><button id="attractionDetailsButton">Details</button>
    `;
  debugger;
  return attractionHTML;
};

// export const attractionData = (pickedAttraction) => {
//     document.querySelector("#attractions-details-container").innerHTML = `
//     <p>${aNamedescription}</p>`
// }
