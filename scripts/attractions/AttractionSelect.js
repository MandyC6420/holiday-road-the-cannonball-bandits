// importing functions from ""

import { getAttractions, useAttractions } from "./AttractionProvider.js";
import { attraction, attractionDetails } from "./Attraction.js";

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
            <option value="">Please select an attraction...</option>
               ${attractionCollection.map((attractionObject) => {
                 const attraction = attractionObject.name;
                 return `<option>${attraction}</option>`;
               })}
            </select>
            </div>
            `;
};

//creating event listener; eventHub variable declares where the listener will be active
const eventHub = document.querySelector(".attractions-Dropdown");
////adds event listener to eventHub and designates it as a change event; this will trigger the data for the selected item to populate in the div
eventHub.addEventListener("change", (attractionObject) => {
  console.log("You selected an item from", attractionObject.target.value);

  // tests to see if listener is detecting change as expected when dropdown item changes
  if (attractionObject.target.id === "AttractionSelect") {
    const attractionChosen = attractionObject.target.value;
    console.log(attractionObject.target.value);

    // attraction(attractionChosen);

    document.querySelector(".attractionsList").innerHTML = attraction(
      attractionChosen
    );
  }
  document.querySelector(".attraction-more-details").innerHTML = "";
});

//target the thing with this id, the eventlistener is clicked
document.querySelector(".attractionsList").addEventListener("click", (eventObject) => {
    if (eventObject.target.id.includes("attractionDetailsButton")) {
      // debugger;

      console.log("this is the details button");
      // debugger;
      const idofAttractionClicked = eventObject.target.value;
      // debugger;
      const allTheAttractions = useAttractions();
      // debugger;
      const matchingAttraction = allTheAttractions.find(
        (singleAttractioninLoop) => {
          return singleAttractioninLoop.id === +idofAttractionClicked;
        }
      );
      // debugger;
      // console.log(
      //   "this should be the matching attractions description",
      //   matchingAttraction.id
      // );
      // debugger;

      getAttractions().then(() => {
        let attractionHTML = "";
        // debugger;
        let allAttractions = useAttractions();
        // debugger;

        const allTheAttractions = useAttractions();
        const idofAttractionClicked = (eventObject.target.id.split("--").pop());
        // console.log(idofAttractionClicked)
        console.log(document.querySelector ("#AttractionSelect").value)
        // debugger;
        const matchingAttraction = allTheAttractions.find(
          (singleAttractioninLoop) => {
            // debugger;
            return singleAttractioninLoop;
          })
            
        

        console.log("this should be the name of the attraction", AttractionSelect.value)

        console.log("this should be the matching attractions details", allTheAttractions)
        debugger;

        document.querySelector("#attractions-details-container--").innerHTML = "";
          debugger;
        for (let i = 0; i < allTheAttractions.length; i++) {
          document.querySelector("#attractions-details-container--").innerHTML += `
          <p id ="description">${allTheAttractions.name}</p>
          <p>${allTheAttractions.value.description}</p>`;
        }
        debugger;

       
      });
    }
  });
