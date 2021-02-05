//creates an export of parkCard that creates the HTML representation of the park when it is selected from the dropdown menu
//will be imported on ParkSelect

export function weatherCard (cardObject) {
    console.log(cardObject)
    return `
    <div id="weather-card">
        <p class="date">Date:${cardObject.dt_txt}</p>
        <p class="date">Today's High:${cardObject.main.temp_max}</p>
        <p class="date">Today's Low:${cardObject.main.temp_min}</p>
        <p class="date">Overall:${cardObject.weather[0].description}</p>
    </div>`
}

// <p>${cardObject.forecast.temperature.value}
        // <p class="date">${cardObject[0].dt_text}</p>
        // <p class="current-temp">Current Temperature:${cardObject.main.temp}</p>
        // <p class="high-temp">High Temp:${cardObject[0]main.temp_max}</p>   
        // <p class="low-temp">Low Temp:${cardObject[0]main.temp_min}</p>   
        // <p class="weather-description">Overall:${cardObject[0].weather[0].description}</p>
        // <p class="temp">Wind Speed:${cardObject.list[0].wind.speed}</p>
        
        