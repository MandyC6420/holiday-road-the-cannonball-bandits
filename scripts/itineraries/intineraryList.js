import { getSelections, useSelections, saveSelections } from "./itineraryProvider.js"

export const itineraryList = () => {


let itineraryContainer = document.querySelector(".save-itinerary-container")  
let itineraryHTMLString = '';

getSelections().then(() => {

    let selectionsArray = useSelections();
    console.log(selectionsArray)

    for(let singleItem of selectionsArray){
        itineraryHTMLString += itineraryDisplay(singleItem)
    };

    itineraryContainer.innerHTML = `
    <p><b>Eatery:</b> ${itineraryHTMLString} </p>
    `
})
}












//
// getNotes().then(() => {

//     let notesArray = useNotes();
//     console.log(notesArray)
   
//     for(let singleNote of notesArray) {
//         notesHTMLString += noteEntry(singleNote)
//     };

//     notesContainer.innerHTML = `
//     <table class="notes-table">
//         <tr>
//         <th class="table-category">Date</th>
//         <th class="table-category">Suspect</th>
//         <th class="table-category-notes">Notes</th>
//         </tr>
    
//         ${notesHTMLString}
//     `


// })
// }

// document.querySelector("#notes-nav-link").addEventListener("click", () => {
// noteList()
 
// })