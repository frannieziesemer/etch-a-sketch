const buttonContainer = document.querySelector('.button-container');
const gridWrapper = document.querySelector('.grid-wrapper');

//append buttons
const clearButton = document.createElement('button');
clearButton.classList.add('clear-button');
clearButton.textContent = 'clear';

const newGridSizeButton = document.createElement('button');
newGridSizeButton.classList.add('new-grid-size-button');
newGridSizeButton.textContent = 'new size';

buttonContainer.appendChild(newGridSizeButton);
buttonContainer.appendChild(clearButton);


const appendGrid = () => {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        gridWrapper.appendChild(div);
    }
}
appendGrid();

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

clearButton.addEventListener('click', clearGrid);









