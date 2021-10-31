document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let blox = Array.from(document.querySelectorAll('.grid div'));
    const width = 10;
    console.log(grid);
    console.log(blox); //checking to make sure the array is correct

    
    /**
     * Create the arrays for each of the 5 Tetromino shapes
     * represented by l, z, t, b and i
     */
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [width*2, width*2+1, width+1, 1],
        [0, width, width+1, width+2]
    ];

    const zTetromino = [
        [width*2, width*2+1, width+1, width+2],
        [0, width, width+1, width*2+1],
        [2, 1, width+1, width],
        [width*2+2, width+2, width+1, 1]
    ];

    const tTetromino = [
        [1, width, width+1, width+2],
        [width+2, 1, width+1, width*2+1],
        [width*2+1, width, width+1, width+2],
        [width, 1, width+1, width*2+1]
    ];

    const bTetromino = [
        [0, 1, width, width+1],
        [1, 2, width+1, width+2],
        [width+1, width+2, width*2+1, width*2+2],
        [width, width+1, width*2, width*2+1]
    ];

    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [2, width+2, width*2+2, width*3+2],
        [width*2, width*2+1, width*2+2, width*2+3]
    ];

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, bTetromino, iTetromino];
    console.log(theTetrominoes[0][0]); // checking to ensure the tetrominoes are outout correctly

    //create an start position and rotation for the tetromino
    let currentPosition = 4;
    let currentRotation = 0;
    console.log(currentPosition, currentRotation);

    //create a random tetromino and its rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];
    console.log(current); //checking output of current, testing random and currentRotation

    //add the tetromino to the grid with a draw function
    function draw() {
        current.forEach( index => {
          blox[currentPosition + index].classList.add('tetromino');
        });
    }
   // draw(); //testing to see if a random tetromino appears on the grid

    //remove the tetromino from the grid with an undraw function
    function undraw() {
        current.forEach( index => {
          blox[currentPosition + index].classList.remove('tetromino');
        });
    }        
    //add interval to move the tetromino down the grid
    timerId = setInterval(moveDown,300);

    //create a function to move the tetrominoes down the grid
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }
    //create a function that freezes the tetromino when it hits the bottom of the div
    // function freeze() {
    //     if(current.some(index => blox[currentPosition + index + width].classList.contains('taken'))) {
    //         current.forEach(index => blox[currentPosition + index].classList.add('taken')); 
    //         //a new tetromino must now be introduced to the grid
    //         random = Math.floor(Math.random() * theTetrominoes.lenght);
    //         current = theTetrominoes[random][currentRotation];
    //         currentPosition = 4;
    //         draw();
    //     }
    // }

    function freeze() {
        if(current.some(index => blox[currentPosition + index + width].classList.contains('taken'))) {
          current.forEach(index => blox[currentPosition + index].classList.add('taken'));
          //start a new tetromino falling
          random = Math.floor(Math.random() * theTetrominoes.length);
          current = theTetrominoes[random][currentRotation];
          currentPosition = 4;
          draw();
        }
    }


});