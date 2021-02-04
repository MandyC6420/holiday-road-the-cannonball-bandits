import {ParkSelect} from "./parks/ParkSelect.js"
import {} from "./parks/ParkProvider.js"
import {} from "./weather/Weather.js"
import {getWeather} from "./weather/WeatherProvider.js"

ParkSelect()
getWeather()


console.log("Welcome to the main module")

import {useAttractions, getAttractions} from "./attractions/AttractionProvider.js"
useAttractions()

import { AttractionSelect } from "./attractions/AttractionSelect.js"
AttractionSelect()

import { attraction } from "./attractions/Attraction.js"
// attraction()
import { getEateries } from "./eateries/EateryProvider.js";
getEateries()

import { EaterySelect } from "./eateries/EaterySelect.js";
EaterySelect()
