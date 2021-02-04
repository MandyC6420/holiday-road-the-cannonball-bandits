//Imports the function that renders the HTML when restaurant is selected
//Imports the functions from data provider to have access to the restaurant objects

import { eateryCard } from './eatery.js';
import { getEateries, useEateries } from './EateryProvider.js'

//Query selector indicates where the dropdown HTML will print

const eateryDropdownTarget = document.querySelector(".eateries-Dropdown")

//

export const EaterySelect = () => {
    getEateries().then(() => {

        const eateries = useEateries();
        renderEaterySelect(eateries)

    })
};


//Declaring function loops through the eateries array passed in and creates the dropdown menu using the business name.

const renderEaterySelect = eateriesArray => {

//Inserts the HTML in the eateries-Dropdown class, as per query selector above
//<select ...> creates the dropdown struction in HTML
//<option..> indicates the values that should populate the dropdown
//.map creates a loop with a function that will return the names only and insert as options
    eateryDropdownTarget.innerHTML = `

    <select class="dropdown"> 
        <option value="0">Select an eatery.</option>
        ${eateriesArray.map((currentEatery)=> {
        const eateryName = currentEatery.businessName
        return `<option>${eateryName}</option>`

        })} 
    </select>

    `
}

//Creating even listener; eventHub variable declares where the listener will be active

const eventHub = document.querySelector(".eateries-Dropdown")

//adds event listener to eventHub and designates it as a change event; this will trigger the data for the selected item to populate in the div

eventHub.addEventListener("change", changeEvent => {
    //console log when the dropdown item is changed; tests to see if listener is detecting change as expected
    console.log("you selected an item from", changeEvent.target.value)

    
   let eateries = useEateries()
    for(const eatery of eateries){
        if(eatery.businessName === changeEvent.target.value){
            document.querySelector(".eateryList").innerHTML = eateryCard(eatery)
        }
        
    }
   

})