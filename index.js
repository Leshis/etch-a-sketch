const gridSize = 16;

const grid = document.getElementById('grid');



function createGrid(size){
    for (let i = 0; i < gridSize*gridSize; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}

createGrid(gridSize);