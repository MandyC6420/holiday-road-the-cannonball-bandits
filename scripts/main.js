console.log("Welcome to the main module")

import {useAttractions, getAttractions} from "./attractions/AttractionProvider.js"
useAttractions(), getAttractions()

import { AttractionSelect } from "./attractions/AttractionSelect.js"
AttractionSelect()

import { attraction } from "./attractions/Attraction.js"
// attraction()
import { getEateries } from "./eateries/EateryProvider.js";
getEateries()

import { EaterySelect } from "./eateries/EaterySelect.js";
EaterySelect()
