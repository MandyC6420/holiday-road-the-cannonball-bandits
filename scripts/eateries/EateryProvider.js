
//declares an empty array for the data to be stored in
let eateries = []

//creates a function that will copy the data obtained in the original fetch call
export const useEateries = () => eateries.slice()


//gets the data from the API and turns it in javascript, then puts it in the empty array declared above
export const getEateries = () => {

    return fetch("http://holidayroad.nss.team/eateries")
      
        .then(response => response.json())
        .then(
            parsedEateries => {
                eateries = parsedEateries
            }
        )
        
}





