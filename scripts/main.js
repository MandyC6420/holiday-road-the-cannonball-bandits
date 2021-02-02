console.log("Welcome to the main module")

import {useAttractions, getAttractions} from "./attractions/AttractionProvider.js"
useAttractions()

import { AttractionSelect } from "./attractions/AttractionSelect.js"
AttractionSelect()
import { attraction } from "./attractions/Attraction.js"
attraction()