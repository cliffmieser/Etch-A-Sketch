const container = document.querySelector("#container");
const button = document.querySelector("button");

const slider = document.querySelector('#gridSize');
const sliderLabel = document.querySelector(".sliderLabel");

//Functions
function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0;  i < (rows * cols); i++){
        let cell = document.createElement('div');
        cell.innerText = (i + 1);
        container.appendChild(cell).className = 'grid-item';
    }
}

function getGridSize(x){
    //takes value of slider
    //returns string of dimensions depending on slider value
    let text = `${x} by ${x}`;
    return text;



}



//Event Handlers

slider.addEventListener('change', (event) =>{
    let val = slider.value;
    let text = getGridSize(val);
    sliderLabel.innerText = text;
})

