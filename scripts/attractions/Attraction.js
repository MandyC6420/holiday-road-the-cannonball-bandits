import { getAttractions, useAttractions } from "./AttractionProvider.js"

//building an html representation of data needed from the attractionCollection

export const attraction = (attractionName) => {
  // debugger
  return `
     
    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
  <h5 class="card-title">${attractionName}</h5>
     <img class="attraction-image" src="../images/attraction-clipart.jpg" alt="world attractions">
     <a href="#" class="btn btn-primary">Details</a>
     `;
};

// {
//    <div class="card" style="width: 18rem;">
//     <div class="card-body">
//     <h2 class="card-title">Card title</h2>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> 
// }

