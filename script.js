const container = document.querySelector(".container") // get div with class container

function random_rgba() {
    let o = Math.round,
        r = Math.random,
        s = 255

    return (
        "rgba(" +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        r().toFixed(1) +
        ")"
    )
}

function makeRows(
    rows, // number of rows to be made
    cols // number of columns to be made
) {
    container.style.setProperty("--grid-rows", rows) // sets the property of rows inside container class with rows entered
    container.style.setProperty("--grid-cols", cols) // sets the property of columns inside container class with columns entered
    for (
        c = 0;
        c < rows * cols; // number of times the loop should run ((Row * Column) times)
        c++
    ) {
        let cell = document.createElement("div") // Create element div
        cell.addEventListener("mouseover", function handleMouseOver() {
            cell.style.backgroundColor = random_rgba()
        })
        container.appendChild(cell).className = "box" // Add created div to the containeer with class box
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    let userInput = parseInt(prompt("Enter the size of the grid: "))
    while (userInput > 100) {
        userInput = parseInt(
            prompt("The size of the grid cannot be more than 100: ")
        )
    }
    makeRows(userInput, userInput)
}

makeRows(16, 16)
