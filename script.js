function makegrid(x){
    let grid = document.querySelector('#grid');
    grid.style.cssText = `display: grid; grid-template-columns: repeat(${x},auto)`

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

const inputvalue = document.querySelector('#input');
inputvalue.addEventListener("change", () =>{
    let numberofsquare = inputvalue.value;
    console.log(numberofsquare);
    makegrid(numberofsquare);

    // hover to black
    const griditems = document.querySelectorAll('.griditems');
    griditems.forEach((griditem) => {
    griditem.addEventListener('mouseover', () => {
    griditem.style.cssText = 'background-color: black;'
    })});

    // square to white colour when click clear
    const clear = document.querySelector('#clear');
    clear.addEventListener('click',() => {
    griditems.forEach((griditem) => {
        griditem.style.cssText = `background-color: white;`})
    });
});









