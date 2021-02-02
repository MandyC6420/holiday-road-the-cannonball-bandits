import { eateryCard } from './eatery.js';
import { getEateries, useEateries } from './EateryProvider.js'

const eateryDropdownTarget = document.querySelector(".eateries-Dropdown")

export const EaterySelect = () => {
    getEateries().then(() => {

        const eateries = useEateries();
        renderEaterySelect(eateries)

    })
};


const renderEaterySelect = eateriesArray => {


    eateryDropdownTarget.innerHTML = `

    <select class="dropdown">
        <option value="0">Please select an eatery.</option>
        ${eateriesArray.map((currentEatery)=> {
        const eateryName = currentEatery.businessName
        return `<option>${eateryName}</option>`

        })} 
    </select>

    `
}

const eventHub = document.querySelector(".eateries-Dropdown")

eventHub.addEventListener("change", changeEvent => {
    console.log("you selected an item from", changeEvent.target.value)
   
    let eateries = useEateries()
    for(const eatery of eateries){
        if(eatery.businessName === changeEvent.target.value){
            document.querySelector(".eateryList").innerHTML = eateryCard(eatery)
        }
    }
   

})