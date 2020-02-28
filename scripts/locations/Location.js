/**
 *  renders individual locations as HTML
 */
const locationFunction = (location) => {
    return `
        <div class="location">
            <div>
                <img class="location__image" src="${location.image}" alt="">
            </div>
        
            <h3 class="location__name">${location.name}</h3>
        
        </div>
    `
}

export default locationFunction

// return `
//         <div class="fish">
//             <div>
//                 <img class="fish__image" src="${fish.image}" alt="">
//             </div>
//             <div class="fish__name">${fish.name}</div>
//             <button id="button--${fish.name}">Details</button>

//             <dialog class="dialog--fish" id="details--${fish.name}">
//                 <div>Species: ${fish.species}</div>
//                 <div>Location: ${fish.location}</div>
//                 <div>Length: ${fish.length}</div>
//                 <div>Food: ${fish.food}</div>

//                 <button class="button--close">Close Dialog</button>
//             </dialog>
//         </div>
//     `