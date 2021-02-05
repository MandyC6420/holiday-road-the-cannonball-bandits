let attractions = []

export const useAttractions = () => {
    return attractions.slice()
}

export const getAttractions = () => {
    //fetching array gathering all the info needed to display attractions
  return fetch("http://holidayroad.nss.team/bizarreries")
  //converts the json string into the javascript data structure
    .then((response) => response.json())
    //tells it where to go
    .then((parsedAttractions) => {
       // console.table(parsedAttractions)
      attractions = parsedAttractions;
    });
};
