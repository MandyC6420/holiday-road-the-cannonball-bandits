//building an html representation of data needed from the attractionCollection

export const attraction = (attractionObject) => {
    return`
     <ul>
     <li>${attractionObject.name}</li>
     <li>${attractionObject.description}</li>
     </ul>`
}