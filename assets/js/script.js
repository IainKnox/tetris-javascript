document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementsByClassName('toggle-btn')[0];
    const navbar = document.getElementsByClassName('navbar-links')[0];
    const grid = document.querySelector('.grid');
    let blox = Array.from(document.querySelectorAll('.grid div'));
    const width = 10;
    console.log(grid);
    console.log(blox); //checking to make sure the array is correct
    const startButton = document.getElementById('start-button');
    let timerId;

    // create a function that toggles the hamburger navigation menu
    toggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });


    /**
     * Create the arrays for each of the 6 Tetrimino shapes
     * represented by q, p, z, t, b and i
     */
    const pTetrimino = [
        [2, 1, width + 1, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 2],
        [width * 2, width * 2 + 1, width + 1, 1],
        [0, width, width + 1, width + 2]
    ];

    const qTetrimino = [
        [0, 1, width + 1, width * 2 + 1],
        [width, width + 1, width + 2, 2],
        [width * 2 + 2, width * 2 + 1, width + 1, 1],
        [width * 2, width, width + 1, width + 2]
    ];

    const zTetrimino = [
        [width * 2, width * 2 + 1, width + 1, width + 2],
        [0, width, width + 1, width * 2 + 1],
        [2, 1, width + 1, width],
        [width * 2 + 2, width + 2, width + 1, 1]
    ];

    const tTetrimino = [
        [1, width, width + 1, width + 2],
        [width + 2, 1, width + 1, width * 2 + 1],
        [width * 2 + 1, width, width + 1, width + 2],
        [width, 1, width + 1, width * 2 + 1]
    ];

    const bTetrimino = [
        [0, 1, width, width + 1],
        [1, 2, width + 1, width + 2],
        [width + 1, width + 2, width * 2 + 1, width * 2 + 2],
        [width, width + 1, width * 2, width * 2 + 1]
    ];

    const iTetrimino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [2, width + 2, width * 2 + 2, width * 3 + 2],
        [width * 2, width * 2 + 1, width * 2 + 2, width * 2 + 3]
    ];

    const theTetriminos = [pTetrimino, qTetrimino, zTetrimino, tTetrimino, bTetrimino, iTetrimino];
    console.log(theTetriminos[0][0]); // checking to ensure the tetriminos are output correctly

    //create an start position and rotation for the tetrimino
    let currentPosition = 4;
    let currentRotation = 0;
    console.log(currentPosition, currentRotation);

    //create a random tetrimino and its rotation
    let random = Math.floor(Math.random() * theTetriminos.length);
    let current = theTetriminos[random][currentRotation];
    console.log(current); //checking output of current, testing random and currentRotation

    //add the tetrimino to the grid with a draw function
    function draw() {
        current.forEach(index => {
            blox[currentPosition + index].classList.add('tetrimino');
        });
    }
    // draw(); //testing to see if a random tetrimino appears on the grid

    //remove the tetrimino from the grid with an undraw function
    function undraw() {
        current.forEach(index => {
            blox[currentPosition + index].classList.remove('tetrimino');
        });
    }
    
    //add interval to move the tetrimino down the grid
    //this will be used to introduce difficulty by speeding the drop rate up
    //timerId = setInterval(moveDown, 1000);

    // //creates a function to enable the Start button
    // function startButton() {
    //     document.addEventListener('click', startButton);
    //     moveDown();

    // }
    // start button acts as start/pause game button
    startButton.addEventListener('click', () => {
        if(timerId) {
            clearInterval(timerId);
            timerId = null;
            startButton.innerHTML ='Game Paused'; //change text to show gameplay is paused
        } else {
            draw();
            timerId = setInterval(moveDown, 1000);
            startButton.innerHTML = 'Started'; //change text to show gameplay is running
        }
    });

    //create a function to move the tetriminos down the grid
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    //create a function that freezes the tetrimino when it hits the bottom of the div
    function freeze() {
        if (current.some(index => blox[currentPosition + index + width].classList.contains('taken'))) {

            current.forEach(index => blox[currentPosition + index].classList.add('taken'));
            //introduce a new tetrimino to the grid
            random = Math.floor(Math.random() * theTetriminos.length);
            current = theTetriminos[random][currentRotation];
            currentPosition = 3;
            draw();
        }
    }

    //create a function to move the tetrimino to the left until it reaches the edge of the grid
    function moveLeft() {
        undraw();
        const leftEdge = current.some(index => (currentPosition + index) % width === 0); //check to make sure the tetrimino does not exceed the left edge
        if (!leftEdge) currentPosition -= 1;
        if (current.some(index => blox[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1;
        }
        draw();
    }

    //create a function to bind directional movement to the arrow keys on the keyboard
    function control(event) {
        if (event.keyCode === 37) {
            moveLeft();
        } else if (event.keyCode === 39) {
            moveRight();
        } else if (event.keyCode === 40) {
            moveDown();
        } else if (event.keyCode === 38) {
            turnShape();
        }
    }
    //create an event listener to listen for keypresses and invoke the control functions
    document.addEventListener('keydown', control);

    //create a function to move the tetrimino to the right until it reaches the edge of the grid
    function moveRight() {
        undraw();
        const rightEdge = current.some(index => (currentPosition + index) % width === width - 1); //check to make sure the tetrimino does not exceed the right edge
        if (!rightEdge) currentPosition += 1;
        if (current.some(index => blox[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1;
        }
        draw();
    }

    //create a function to turn the tetrimino around so as to get it to fill gaps and complete lines
    function turnShape() {
        undraw(); //undraw the current tetrimino 
        currentRotation++; //increment the rotation by one
        if (currentRotation === current.length) {   
            currentRotation = 0; //set new rotation 
        }
        current = theTetriminos[random][currentRotation];
        draw(); //draw the new rotation 
    }

    

});