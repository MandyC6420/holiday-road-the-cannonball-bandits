import { getAttractions, useAttractions } from "/scripts/attractions/AttractionProvider.js"

const contentTarget = document.querySelector(".attractions-Dropdown");

export const AttractionSelect = () => {
    getAttractions().then(() => {
        let allTheAttractions = useAttractions();
        // console.log(allTheAttractions)
        render(allTheAttractions);
    });
};

const render = (attractionCollection) => {
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

// const eventHub = document.querySelector("body");
// eventHub.addEventListener("change", (eventObject) => {
//     if(eventObject.target.id === "AttractionSelect") {
//         const attractionChosen = eventObject.target.value
//             console.log("you clicked on eventObject" (eventObject))
//     }
// })