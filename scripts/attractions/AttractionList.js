import { useAttractions } from "./AttractionProvider.js"

document.querySelector("body").addEventListener("click", (EventObject) => {
    console.log("you clicked me")
    console.log(EventObject.target.id)
    if(EventObject.target.id.includes("#attractionDetailsButton")){
        const idOfAttractionClicked = (EventObject.target.id.split("--").pop())
        const allTheAttractions = useAttractions()

        const matchingAttraction = allTheAttractions.find((singleAttractioninLoop) => ){

        
        })
