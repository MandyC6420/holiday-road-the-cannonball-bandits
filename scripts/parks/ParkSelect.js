import {getParks, useParks} from "./ParkProvider.js"

//reference in HTML where the <select> will be rendered
const parksTarget = document.querySelector(".parks-Dropdown")

//define a function of ParkSelect
export const ParkSelect = () => {
    getParks().then(() => {
        let parksArray = useParks()
       //passing the parksArray into the function of render
        render (parksArray)
        console.log(parksArray[10])
    })
}

//.map is the loop that is looping over the array of parksCollection and taking in the parameter of currentParkInLoop
const render = parksCollection => {
    //building the dropdown menu for parks for the DOM
    parksTarget.innerHTML = `
    <select class="dropdown" id="ParkSelectDropdown">
    <option value="0">Please select a park...</option>
    ${parksCollection.map((currentParkInLoop) => { 
        return `<option>${currentParkInLoop}</option>`}

    )}
    </select>`
}

//"change" is the type of event on my addEventListener
//changeEvent is the parameter on my callback function
parksTarget.addEventListener("change",(changeEvent) => {
    if(changeEvent.target.value === "ParkSelectDropdown") {
        console.log("This is the park that was selected: ", changeEvent.target.value)
    }
}
)