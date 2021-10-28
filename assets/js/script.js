document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementsByClassName('grid');
    let blox = Array.from(document.querySelectorAll('.grid div'));
    const width = 10;

    
    /**
     * Create the arrays for each of the 5 Tetromino shapes
     * represented by l, z, t, b and i
     */
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [width * 2, width * 2 + 1, width + 1, 1],
        [0, width, width + 1, width + 2]
    ];

    const zTetromino = [
        [width * 2, width * 2 + 1, width + 1, width + 2],
        [0, width, width + 1, width * 2 + 1],
        [2, 1, width + 1, width],
        [width * 2 + 2, width + 2, width + 1, 1]
    ];

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [width + 2, 1, width + 1, width * 2 + 1],
        [width * 2 + 1, width, width + 1, width + 2],
        [width, 1, width + 1, width * 2 + 1]
    ];

    const bTetromino = [
        [0, 1, width, width + 1],
        [1, 2, width + 1, width + 2],
        [width + 1, width + 2, width * 2 + 1, width * 2 + 2],
        [width, width + 1, width * 2, width * 2 + 1]
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [2, width + 2, width * 2 + 2, width * 3 + 2],
        [width * 2, width * 2 + 1, width * 2 + 2, width * 2 + 3]
    ];

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, bTetromino, iTetromino];
    console.log(theTetrominoes[0][3]);

    //create an start position and rotation for the tetromino
    let currentPosition = 4;
    let currentRotation = 0;

    //create a random tetromino and its rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    //add the tetromino to the grid with a draw function
    function draw() {
        current.forEach( index => {
            blox[currentPosition + index].classList.add('tetromino')
        });
    }
    draw(); //testing to see if a random tetromino appears on the grid

    //remove the tetromino from the grid with an undraw function
    function undraw() {
        current.forEach( index => {
            blox[currentPosition + index].classList.remove('tetromino')
        });
    }        
    
    //create a function to move the tetrominoes down the grid
    function moveDown() {
        undraw();
        currentPosition +=width;
        draw();
    }
    




});