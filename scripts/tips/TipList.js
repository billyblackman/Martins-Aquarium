import tipFunction from "./Tip.js";
import { tipCollectionCopy } from "./TipListProvider.js";

/**
 *  TipList which renders individual fish objects as HTML
 */



const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("aside")
    const tips = tipCollectionCopy()

// Generate all of the HTML for all of the fish
let tipHTMLRepresentations = ""
for (const tip of tips) {

    tipHTMLRepresentations += tipFunction(tip)


    /*
        Invoke the tip component function
        and pass the current tip as an argument.
        Each time, add the return value to the
        fishHTMLRepresentations variable with `+=`
    */
}

// Add a section, and all of the fish to the DOM
contentElement.innerHTML += `
    <aside class="tipsList">
        ${tipHTMLRepresentations}
    </aside>
`

}

export default TipList
