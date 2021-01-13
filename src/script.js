const buttonContainer = document.querySelector('.button-container');
const gridWrapper = document.querySelector('.grid-wrapper');
let gridSize;


//append buttons
const clearButton = document.createElement('button');
clearButton.classList.add('clear-button');
clearButton.textContent = 'clear';

const newGridSizeButton = document.createElement('button');
newGridSizeButton.classList.add('new-grid-size-button');
newGridSizeButton.textContent = 'new size';

buttonContainer.appendChild(newGridSizeButton);
buttonContainer.appendChild(clearButton);
newGridSizeButton.disabled = false;



const appendGrid = (gridSize) => {
    let numberOfPixels = Math.pow(gridSize, 2);
    for(let i = 0; i < numberOfPixels; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover', (event) => {
            event.target.style.background = 'black';
        })
        gridWrapper.appendChild(div);
    }
    gridWrapper.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridWrapper.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
 
}

const clearGrid = () => {
    let pixels = document.querySelectorAll('.pixel');
    console.log(pixels);
    pixels.forEach((pixel) => {
        pixel.style.background = "white"
    });
}

const resizeGrid = () => {
    let size = prompt('Pick a size (width of 100 or less):');
    gridWrapper.innerHTML = '';
    if (size < 101) { 
        appendGrid(size);
    } 
}


window.addEventListener('load', appendGrid(16));
clearButton.addEventListener('click', clearGrid);
newGridSizeButton.addEventListener('click', resizeGrid);








