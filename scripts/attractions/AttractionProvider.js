//calling an empty array where attractions will live

let attractions = "";

//exporting useAttractions to AttractionSelect
export const useAttractions = () => {
    //returning attractins .slice makes a copy of the original array
  return attractions.slice();
};


//exporting getAttractions to AttractionSelect
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
