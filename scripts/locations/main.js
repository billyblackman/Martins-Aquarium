import { locationCollectionCopy } from "./LocationDataProvider.js";
import locationFunction from "./Location.js";
import LocationList from "./LocationList.js";

// import { useFish } from './fish/FishDataProvider.js'
// import Fish from './fish/Fish.js'
// import FishList from './fish/FishList.js'
// import TipList from './tips/TipList.js'




// const allTheFishObjects = useFish()

// for (const currentFishObject of allTheFishObjects) {
//     console.log(currentFishObject)
// }

// FishList()

// TipList()

const allTheTips = locationCollectionCopy()

for (const currentLocation of allTheTips) {
    console.log(currentLocation)
}


LocationList()