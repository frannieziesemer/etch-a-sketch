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




const appendGrid = (gridSize) => {
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        gridWrapper.appendChild(div);
    }
}
appendGrid(256);

const pixels = document.querySelectorAll('.pixel');
const drawLineOnHover = () => {
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', (event) => {
            pixel.style.background = 'black';
        })
    });
}
drawLineOnHover();


const clearGrid = () => {
    pixels.forEach((pixel) => {
            pixel.style.background = 'white';
    });
}

//click button 
// ask for size
//append grid bases on size 
const resizeGrid = () => {
    let size = prompt('Pick a size (width of 100 or less):');
    appendGrid(size);
}

clearButton.addEventListener('click', clearGrid);
newGridSizeButton.addEventListener('click', resizeGrid);








