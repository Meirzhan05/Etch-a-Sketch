const container = document.querySelector('#container');
const range = document.querySelector('#myRange');
const labelRange = document.querySelector('#labelRange');
let max = 50;

createGrids(max);

range.addEventListener('input', () => {
    labelRange.textContent = range.value;
    let max = range.value;
    let div = document.querySelector('#container');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    resizeGrids(max);
    hoverRandomColor();
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${max}, 1fr);`);
});

hoverRandomColor();

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

function resizeGrids(max) {
    let colors = [];
    document.querySelectorAll('.grid').forEach(grid => {
        colors.push(grid.style.backgroundColor);
    })

    createElement(max);
    
    document.querySelectorAll('.grid').forEach((grid, index) => {
        if (colors[index]) {
            grid.style.backgroundColor = colors[index];
        }
    })
    

}