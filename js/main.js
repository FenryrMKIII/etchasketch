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
    event.target.classList.toggle('grid-item-pixelated')
}

function checkUserInputs(isValid){
    if (!isNaN(GRID_HEIGHT) && (!isNaN(GRID_WIDTH)) && (GRID_WIDTH<101) && (GRID_HEIGHT<101)) {
        return true
    }
    else if (isNaN(GRID_HEIGHT) || isNaN(GRID_WIDTH)) {
        alert('One of your input is not a number');
    }
    else if ((GRID_WIDTH>100 || GRID_WIDTH>100)) {
        alert('Each grid dimension must be smaller than 100');
    }
}

function askUserGridSize(){
    let isValid = false

    while (!isValid) {
        GRID_WIDTH = prompt("Desired grid width");
        GRID_HEIGHT = prompt("desired grid height");

        isValid = checkUserInputs(isValid)
    }

    removeChilds(document.getElementById("grid-container"));
    makeSketchPad(GRID_WIDTH, GRID_HEIGHT);
}

// Create the default grid
makeSketchPad(8, 8);

// Allow user to create a custom sketchpad
document.getElementById("new-sketchpad").onclick = askUserGridSize;
