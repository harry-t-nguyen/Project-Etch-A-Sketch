function makegrid(x){
    let grid = document.querySelector('#grid');
    grid.style.cssText = `display: grid; grid-template-columns: repeat(${x},auto)`

    // Clear all childs before running again if input change
    while (grid.firstChild){
        grid.firstChild.remove();
    };

    for (let i=0; i<x; i++){
        for (let j = 0; j<x; j++){
            let griditems = document.createElement('div');
            griditems.classList.add('griditems');
            grid.appendChild(griditems);
        }
    }
};

function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";  
  }
  
const inputvalue = document.querySelector('#input');

// listen to input change
inputvalue.addEventListener("change", () =>{
    let numberofsquare = inputvalue.value;
    makegrid(numberofsquare);

// Default hover to black
    const griditems = document.querySelectorAll('.griditems');
    griditems.forEach((griditem) => {
        griditem.addEventListener('mouseover', () => {
            griditem.style.cssText = `background-color: black;`
    })});

//if user click on black color
    const black = document.querySelector('#black');
    black.addEventListener('click', () => {
        color = "black";
        griditems.forEach((griditem) => {
            griditem.addEventListener('mouseover', () => {
                griditem.style.cssText = `background-color: ${color};`
        })});
    });

//if user click on eraser color = white
    const eraser = document.querySelector('#eraser');
    eraser.addEventListener('click', () => {
        color = "white";
        griditems.forEach((griditem) => {
            griditem.addEventListener('mouseover', () => {
                griditem.style.cssText = `background-color: ${color};`
        })});
    });

//if user click on rainbow
    const rainbow = document.querySelector('#rainbow');
    rainbow.addEventListener('click', () => {
        // if randomRGB here only 1 color
        // let color = randomRGB();
        griditems.forEach((griditem) => {
            griditem.addEventListener('mouseover', () => {
                let color = randomRGB();
                griditem.style.cssText = `background-color: ${color};`
        })});
    })

// Toggle grid line, toggle noborder classlist
    const gridline = document.querySelector('#gridline');
    gridline.addEventListener('click',() => {
        griditems.forEach((griditem) => {
            griditem.classList.toggle('noborder');
        })
    })

// All square to white colour when click clear
    const clear = document.querySelector('#clear');
    clear.addEventListener('click',() => {
        griditems.forEach((griditem) => {
            griditem.style.cssText = `background-color: white;`
        })
    });


});









