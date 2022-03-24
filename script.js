const container = document.querySelector(".container") // get div with class container

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
        container.appendChild(cell).className = "box" // Add created div to the containeer with class box
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

makeRows(16, 16)
