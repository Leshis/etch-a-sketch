const grid = document.getElementById('grid');
const gridSizeInput = document.getElementById('grid-size-input');
const colourInput = document.getElementById('color-picker');
const colourBtn = document.getElementById('color-button');
const eraserBtn = document.getElementById('eraser-button');
const clearBtn = document.getElementById('clear-button');

const defaultColour = '#121212';

let gridSize = gridSizeInput.value;
let colour = colourInput.value;
let isColour = false;
let isEraser = false;

colourBtn.addEventListener('click', function () {
    colourBtn.classList.toggle('btn-highlight');
    isColour = !isColour;
    if (!isColour) {
        colour = defaultColour;
    }

    if (isEraser) {
        eraserBtn.classList.remove('btn-highlight');
        isEraser = false;
    }
})

eraserBtn.addEventListener('click', function () {
    eraserBtn.classList.toggle('btn-highlight');
    isEraser = !isEraser;

    if (isColour) {
        colourBtn.classList.remove('btn-highlight');
        isColour = false;
        colour = defaultColour;
    }
})

clearBtn.addEventListener('click', function(){
    createGrid(gridSize);

    if (isColour) {
        colourBtn.classList.remove('btn-highlight');
        isColour = false;
        colour = defaultColour;
    }

    if (isEraser) {
        eraserBtn.classList.remove('btn-highlight');
        isEraser = false;
    }
})

gridSizeInput.addEventListener('change', function () {
    gridSize = gridSizeInput.value;
    createGrid(gridSize);
})

function createGrid(size) {
    grid.textContent = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseenter', function (e) {
            if (isColour) {
                e.target.style.backgroundColor = colourInput.value || defaultColour;
            }
            else if (isEraser) {
                e.target.style.backgroundColor = 'whitesmoke';
            }
            else {
                e.target.style.backgroundColor = defaultColour;
            }
        });
        grid.appendChild(square);
    }
}

createGrid(gridSize);