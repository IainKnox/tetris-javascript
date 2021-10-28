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




});