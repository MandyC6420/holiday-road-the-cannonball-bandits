//Creates the HTML to be rendered in eatery div when a restaurant is selected. 
//the eateryObject will end up being used on the eatery object in EaterySelect.js after the change value is matched with the eatery object with the same business name

export const eateryCard = (eateryObject) => {

    return `
    
    <h2>${eateryObject.businessName}</h2>
    <h3>${eateryObject.city},${eateryObject.state}</h3>
    <img class="eatery-image" src="../images/restaurant-clipart.jpg" alt="drawing-of-restaurant">
    <button>Details</button>

    `

}