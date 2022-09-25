intializeGrid(16);
 
function randomColor() {
    let num = Math.floor(Math.random() * 16777215);
    return "#" + num.toString(16);
}

function intializeGrid(dim) {
    container.setAttribute('style', `grid-template-columns: repeat(${dim}, auto); grid-template-rows: repeat(${dim}, auto);`);
    for (let i = 1; i <= Math.pow(dim,2); i++) {
        const div = document.createElement('div');
        document.getElementById("container").appendChild(div);
        div.classList.toggle('box');
    }
    const divs = document.querySelectorAll('.box');
    divs.forEach(el => el.addEventListener('mouseover', event => {
        el.style.backgroundColor = `${randomColor()}`;
      }));
}

function newGrid(dim){
    const elements = document.getElementsByClassName("box");
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    intializeGrid(dim);
}

document.getElementById("bt").onclick = function(){ 
    let size = prompt("How big?");
    size = Number(size);
    if(size <= 100) {
        newGrid(size);
    }
    else {
        alert("Bad input, must be a number (max 100)")
    }
};