

//building an html representation of data needed from the attractionCollection
let attractionsDetailsContainer = document.querySelector(".attraction-more-details")

export const attraction = (aName) => {
    
    console.log("This should be", aName)
  return `
         <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${aName}</h5>
  
  <img class="attraction-image" src="../images/attraction-clipart.jpg" alt="world attractions">
  <button id="attractionDetailsButton--">Details</button>
  </div>`;
};


export const attractionDetails = (aName) => {
    let attractionHTML = `
      <section class="attraction-preview">
      
      
      <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Details</a>
      </section><button class="attractionDetailsButton--" id = "details--${attractionDetails.id}>Details</button>
      `;
    
    return attractionHTML;
  };
  
  export const attractionData = (pickedAttraction) => {
      document.querySelector("#attractions-details-container").innerHTML = `
      <p>${aNamedescription}</p>
      <p>${city}, ${state}</p>
      <p>Souvenirs: ${description} </p> `
  }

// attractionDetails.innerHTML = `
// <p id ="description">${allTheAttractions.name}</p>
// <p>${allTheAttractions.description}</p>`
