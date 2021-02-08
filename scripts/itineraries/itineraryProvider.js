let selections = []

export const useSelections = () => selections.slice()

export const getSelections = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(parsedSelections => {
            selections = parsedSelections
        })

}

export const saveSelections = selection => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(selection)
    })
    .then(getSelections) // After we add a note, get them all again so our new note appears in our collection
}

