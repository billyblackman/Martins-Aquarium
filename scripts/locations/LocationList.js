
import locationFunction from "./Location.js";
import { locationCollectionCopy } from "./LocationDataProvider.js";

/**
 *  TipList which renders individual fish objects as HTML
 */



const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".location__list")
    const locations = locationCollectionCopy()

// Generate all of the HTML for all of the fish
let locationHTMLrepresentation = ""
for (const location of locations) {

    locationHTMLrepresentation += locationFunction(location)


    /*
        Invoke the tip component function
        and pass the current tip as an argument.
        Each time, add the return value to the
        fishHTMLRepresentations variable with `+=`
    */
}

// Add a section, and all of the fish to the DOM
contentElement.innerHTML += `
    <section class="location__list">
        ${locationHTMLrepresentation}
    </section>
`

}

export default LocationList