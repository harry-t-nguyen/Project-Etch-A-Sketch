let numberofsquare = document.querySelector('#input').value;

function makegrid(x){
    let grid = document.querySelector('#grid');
    grid.style.cssText = `display: grid; grid-template-columns: repeat(${x},auto)`

    for (let i=0; i<x; i++){
        for (let j = 0; j<x; j++){
            let griditems = document.createElement('div');
            griditems.classList.add('griditems');
            grid.appendChild(griditems);
        }
    }
};

makegrid(numberofsquare);
// const black = document.querySelector('#black');
// black.addEventListener('click', () =>{
//     return color = 'black'
// });


const griditems = document.querySelectorAll('.griditems');
griditems.forEach((griditem) => {
    griditem.addEventListener('mouseover', () => {
        griditem.style.cssText = 'background-color: black;'
})});


// square to white colour when click clear
const clear = document.querySelector('#clear');
clear.addEventListener('click',() => {
    griditems.forEach((griditem) => {
        griditem.style.cssText = `background-color: white;`
    })
});

