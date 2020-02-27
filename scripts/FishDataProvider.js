const fishCollection = [
    {
        name: "Bart",
        species: "Blue Tang",
        food: ["algae", "crustaceans"],
        location: "Atlantic Ocean",
        length: "4 feet"
    },

    {
        name: "Trey",
        species: "Chinese Goldfish",
        food: "kibble",
        location: "Yangtze River",
        length: "2 feet"

    },

    {
        name: "James",
        species: "Great White Shark",
        food: "People",
        location: "Atlantic Ocean",
        length: "15 feet"
    },

    {
        name: "Alex",
        species: "Gross-Brained Koi",
        food: "PLankton",
        location: "Bermuda",
        length: "5 inches"
    },

    {
        name: "Alex",
        species: "Gross-Brained Koi",
        food: "PLankton",
        location: "Bermuda",
        length: "5 inches"
    },

    {
        name: "Margot",
        species: "Purple Flounder",
        food: "PLankton",
        location: "Great Barrier Reed",
        length: "4 inches"
    },
]


export const useFish = () => {
    return fishCollection.slice()
}