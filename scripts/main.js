import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'

initializeDetailButtonEvents()

const allTheFishObjects = useFish()

for (const currentFishObject of allTheFishObjects) {
    console.log(currentFishObject)
}
