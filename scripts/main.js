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
