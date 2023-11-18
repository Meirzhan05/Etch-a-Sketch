const container = document.querySelector('#container');
const range = document.querySelector('#myRange');
const labelRange = document.querySelector('#labelRange');
let max = 50;
let curr = max;
// Create grids for 50x50 dimension
createGrids(max);

hoverRandomColor();

// When user changes the dimension, change grids
range.addEventListener('input', () => {
    labelRange.textContent = range.value;
    let max = range.value;
    console.log(max);
    let div = document.querySelector('#container');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    createGrids(max);
    hoverRandomColor();
    // Change the styling of the container
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${max}, 1fr);`);
});


function hoverRandomColor() {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', function() {
            this.style.backgroundColor = getRandomColor();
        })
    })
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

function createGrids(max) {
    for (let i = 0; i < max * max; i++) {
        const grid = document.createElement('div');
        grid.className = 'grid';
        container.appendChild(grid);
    }
}
