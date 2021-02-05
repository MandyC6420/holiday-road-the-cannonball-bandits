import { attractionCard } from "./Attraction.js"
import { getAttractions, useAttractions } from "./AttractionProvider.js"



const attractionDropdownTarget = document.querySelector(".attraction-Dropdown")
// Get a reference to the DOM element where the <select> will be rendered
// const eventHub = document.querySelector("body")

export const attractionSelect = () => {
  getAttractions().then(() => {

    const attractions = useAttractions()
    renderattractionSelect(attractions)
  })
};

const renderattractionSelect = attractionArray => {
  attractionDropdownTarget.innerHTML = `<select class="dropdown"> 
  <option value="">Select an Attraction.</option>
  ${attractionArray.map((currentAttraction)=> {
  const attractionName = currentAttraction.name
  return `<option>${currentAttraction.name}</option>`
  })} 
</select>
`
}

const eventHub = document.querySelector (".attraction-Dropdown")

eventHub.addEventListener("change", changeEvent => {
  //console log when the dropdown item is changed; tests to see if listener is detecting change as expected
  console.log("you selected an item from", changeEvent.target.value)

  let attractions = useAttractions()
  for(const attraction of attractions){
    if(attraction.name === changeEvent.target.value)
    document.querySelector(".attractionsList").innerHTML = attractionCard(attraction)
  }
}
)
  





   