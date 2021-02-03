// importing functions from ""

import {
  getAttractions,
  useAttractions,
} from "/scripts/attractions/AttractionProvider.js";
import { attraction } from "./Attraction.js";

// Get a reference to the DOM element where the <select> will be rendered
// Telling the dropdown where to live
const contentTarget = document.querySelector(".attractions-Dropdown");

// an arrow function
export const AttractionSelect = () => {
  // wait to getAttractions back from API
  getAttractions().then(() => {
    //useAttractions is making a copy with the .slice from AttractionProvider
    //assigning the variable/name allTheAttractions to that copy
    let allTheAttractions = useAttractions();

    //passing allTheAttractions through the function of render
    render(allTheAttractions);
  });
};

// arrow function/return value by rendering/delivering/returning the list of attractions
const render = (attractionCollection) => {
  // building attractions dropdown
  //this is the target where the HTML is going to live--defined line 8
  //.map is looping over the array attractionCollection 
  //it is taking in the parameter of attractionObject
  contentTarget.innerHTML = `
    <select class="dropdown" id="AttractionSelect">
            <option value="0">Please select an attraction...</option>
               ${attractionCollection.map((attractionObject) => {
                 const attraction = attractionObject.name;
                 return `<option>${attraction}</option>`;
               })}
            </select>
            </div>
            `;
};

const eventHub = document.querySelector("body");
eventHub.addEventListener("change", (eventObject) => {
  if (eventObject.target.id === "AttractionSelect") {
    const attractionChosen = eventObject.target.value;
    console.log(eventObject.target.value);
    // debugger
    attraction(attractionChosen);
  }
});

//create a conditional that if the eventObjerct.target.value === name in the loop