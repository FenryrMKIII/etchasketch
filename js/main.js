let GRID_HEIGHT
let GRID_WIDTH

const container = document.getElementById("grid-container");

function removeChilds(element) {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
    }

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

function activatePixels(){
    const gridItems = Array.from(document.querySelectorAll(".grid-item"));
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', pixelDiv));
}

function makeSketchPad(numRows, numCols) {
    makeRows(numRows,numCols);
    activatePixels();
}

function pixelDiv(event){
    console.log("I am pixlated")
    event.target.classList.toggle('grid-item-pixelated')
}

function askUserGridSize(){
    let isValid = false

    while (!isValid) {
    GRID_WIDTH = prompt("Desired grid width");
    GRID_HEIGHT = prompt("desired grid height");

    if (!isNaN(GRID_HEIGHT) && (!isNaN(GRID_WIDTH)) && (GRID_WIDTH<101) && (GRID_HEIGHT<101)) {
            isValid=true
        }
    }

    removeChilds(document.getElementById("grid-container"));
    makeSketchPad(GRID_WIDTH, GRID_HEIGHT);
}

// Create the default grid
makeSketchPad(8, 8);

// Allow user to create a custom sketchpad
document.getElementById("new-sketchpad").onclick = askUserGridSize;
