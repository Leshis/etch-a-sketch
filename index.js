const grid = document.getElementById('grid');
const gridSizeInput = document.getElementById('gridSizeInput');

let gridSize = gridSizeInput.value;

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
            e.target.classList.toggle('highlighted');
        });

        square.addEventListener('mouseleave', function (e) {
            e.target.classList.toggle('highlighted');
        });

        grid.appendChild(square);
    }
}

createGrid(gridSize);