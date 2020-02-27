const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--Jobe").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Jobe")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Sam").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Sam")
            theDialog.showModal()
            console.log("button sam fired")
        }
    )

    document.querySelector("#button--Trey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Trey")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--James").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--James")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Alex").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Alex")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Margot").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Margot")
            theDialog.showModal()
        }
    )

}



export default initializeDetailButtonEvents

