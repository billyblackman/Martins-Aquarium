import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'
import Fish from './Fish.js'
import FishList from './FishList.js'



const allTheFishObjects = useFish()

for (const currentFishObject of allTheFishObjects) {
    console.log(currentFishObject)
}

FishList()

initializeDetailButtonEvents()