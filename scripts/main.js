import {ParkSelect} from "./parks/ParkSelect.js"
import {} from "./parks/ParkProvider.js"
import {weatherCard} from "./weather/Weather.js"
import {getWeather, useWeather} from "./weather/WeatherProvider.js"

ParkSelect()
getWeather()


console.log("Welcome to the main module")

import {useAttractions} from "./attractions/AttractionProvider.js"
useAttractions()

import { getAttractions } from "./attractions/AttractionProvider.js"
getAttractions()

import { attractionSelect } from "./attractions/AttractionSelect.js"
attractionSelect()
import { getEateries } from "./eateries/EateryProvider.js";
getEateries()

import { EaterySelect } from "./eateries/EaterySelect.js";
EaterySelect()
