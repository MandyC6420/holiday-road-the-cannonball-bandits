//creates an export of parkCard that creates the HTML representation of the park when it is selected from the dropdown menu
//will be imported on ParkSelect

export function weatherCard (cardObject) {
    return `
    <div class="weather-card">
        <p>${cardObject.dt}</p>
    </div>`
}

// <p>${cardObject.forecast.temperature.value}
        // <p class="date">${cardObject.list[0].dt_text}</p>
        // <p class="current-temp">Current Temperature:${cardObject.main.temp}</p>
        // <p class="high-temp">${cardObject.main.temp_max}</p>   
        // <p class="low-temp">${cardObject.main.temp_min}</p>   
        // <p class="weather-description">Overall:${cardObject.list[0].weather[0].description}</p>
        // <p class="temp">Wind Speed:${cardObject.list[0].wind.speed}</p>
        
        