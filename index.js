const grid = document.getElementById('grid');
const gridSizeInput = document.getElementById('gridSizeInput');

let gridSize = gridSizeInput.value;

gridSizeInput.addEventListener('change', function () {
    gridSize = gridSizeInput.value;
    createGrid(gridSize);
})

function createGrid(size) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseenter', function (e) {
            if(e.target.classList.contains("square")){
                e.target.classList.toggle('highlighted');
            }
        });

        square.addEventListener('mouseleave', function (e) {
            if(e.target.classList.contains("square")){
                e.target.classList.toggle('highlighted');
            }
        });

        grid.appendChild(square);
    }
}




createGrid(gridSize);