const grid = document.getElementById('grid');
const gridSizeInput = document.getElementById('gridSizeInput');

let gridSize = gridSizeInput.value;

gridSizeInput.addEventListener('change', function(){
    gridSize = gridSizeInput.value;
    createGrid(gridSize);
})

function createGrid(size){
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}

createGrid(gridSize);