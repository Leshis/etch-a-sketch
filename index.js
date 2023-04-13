const grid = document.getElementById('grid');
const gridSizeInput = document.getElementById('grid-size-input');
const colourInput = document.getElementById('color-picker');
const colourBtn = document.getElementById('color-button');

const defaultColour = 'darkslategray';

let highlightClass = document.getElementsByClassName('.highlighted');
let gridSize = gridSizeInput.value;
let colour = colourInput.value;
let isColour = false;

gridSizeInput.addEventListener('change', function(){
    gridSize = gridSizeInput.value;
    createGrid(gridSize);
})

colourBtn.addEventListener('click', function(){
    colourBtn.classList.toggle('btn-highlight');
    isColour = !isColour;
    if(!isColour){
        colour = defaultColour;
    }
})

function createGrid(size) {
    grid.textContent = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');

        
        square.addEventListener('mouseenter', function (e) {
            if (isColour) {
                e.target.style.backgroundColor = colourInput.value ? colourInput.value: 'darkslategray';
            } else {
                e.target.style.backgroundColor = defaultColour;
            }
        });

        square.addEventListener('mouseleave', function(e){
            e.target.style.backgroundColor = 'gainsboro';
        })

        grid.appendChild(square);
    }
}

createGrid(gridSize);
console.log(colour);