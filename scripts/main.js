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

import { getSelections, useSelections } from "./itineraries/itineraryProvider.js";
getSelections()

import { renderItineraryToSave } from "./itineraries/itineraryForm.js"
renderItineraryToSave()

import { itineraryList } from "./itineraries/intineraryList.js";

import { } from "./itineraries/itinerary.js"
