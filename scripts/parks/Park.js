//creates an export of parkCard that creates the HTML representation of the park when it is selected from the dropdown menu
//will be imported on ParkSelect

export function parkCard (cardObject) {
    return `
    <div class="park-card">
        <h2 class="park-name">${cardObject.fullName}</h2>
        
        <h3 class="park-address">${cardObject.addresses[0].city},${cardObject.addresses[0].stateCode}</h3>
        
        <button>Details</button>
    </div>`
}

{/* <h3 class="park-address">${cardObject.latitude}</h3>
<h3 class="park-address">${cardObject.longitude}</h3> */}