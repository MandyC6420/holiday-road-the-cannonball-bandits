//creates an export of parkCard that creates the HTML representation of the park when it is selected from the dropdown menu
//will be imported on ParkSelect

export function weatherCard (cardObject) {
    
    return `
    <div id="weather-card">
        <p>Date:${cardObject[0].dt_txt}</p>
    </div>`
}

// <p>${cardObject.forecast.temperature.value}
        // <p class="date">${cardObject.list[0].dt_text}</p>
        // <p class="current-temp">Current Temperature:${cardObject.main.temp}</p>
        // <p class="high-temp">High Temp:${cardObject[0]main.temp_max}</p>   
        // <p class="low-temp">Low Temp:${cardObject[0]main.temp_min}</p>   
        // <p class="weather-description">Overall:${cardObject[0].weather[0].description}</p>
        // <p class="temp">Wind Speed:${cardObject.list[0].wind.speed}</p>
        
        