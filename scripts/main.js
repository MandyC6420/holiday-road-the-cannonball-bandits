import {ParkSelect} from "./parks/ParkSelect.js"
import {} from "./parks/ParkProvider.js"
import {weatherCard} from "./weather/Weather.js"
import {getWeather, useWeather} from "./weather/WeatherProvider.js"

ParkSelect()



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

import { getSelections, useSelections, saveSelections } from "./itineraries/itineraryProvider.js";
getSelections()


import { itineraryList } from "./itineraries/intineraryList.js";
itineraryList()// 

import { itineraryCard } from "./itineraries/itinerary.js"
