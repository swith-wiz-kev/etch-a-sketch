function createGrid(sideLength) {
    deleteSquares();
    const container = document.querySelector('.grid.container');
    const gridSquares = document.createElement('div');
    gridSquares.className = "grid squares";
    const width = Math.floor(800/sideLength -1); //1px removed for border
    const offset = Math.floor((800 - (width+1)*sideLength)/2); //used for centering
    gridSquares.style.width = width + 'px';
    gridSquares.style.height = width + 'px';
    let topPosition = 0;
    let leftPosition = 0;
    for (let i = 0; i < sideLength; i++) {
        leftPosition =  i*(width+1)+offset;
        for (let j = 0; j < sideLength; j++) {
            topPosition =  j*(width+1)+offset;
            const clone = gridSquares.cloneNode(false);
            clone.style.top = topPosition + 'px';
            clone.style.left = leftPosition + 'px';
            container.appendChild(clone);
        }
        
    }
}

function newGrid() {
    let sideLength = "";
    while (!(sideLength >=2 && sideLength <= 100 )) {
    sideLength = prompt('Please enter number of squares in one side of new grid. (2-100)');
    sideLength = Math.round(Number(sideLength));
    }
    createGrid(sideLength);
}

function deleteSquares() {
    const body= document.querySelector('body');
    const oldContainer = document.querySelector('.grid.container');
    const newContainer = oldContainer.cloneNode(false);
    body.replaceChild(newContainer,oldContainer);
}

const changeGridButton = document.querySelector('.control.button')
changeGridButton.addEventListener('click',()=>newGrid())
createGrid(16);