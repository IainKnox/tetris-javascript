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
    const playerScore = document.getElementById('score');
    let score = 0;
    const gameLine = document.getElementById('lines');
    let lines = 0;
    const playerLevel = document.getElementById('levels');
    let level = 0;
    const gameMusic = document.getElementById('music');
    const soundButton = document.getElementById('play');
    const nextGrid = document.querySelector('.display-grid');
    // const nextCells = [ ];

    // // nextUpGrid dimensions
    // const nextWidth = 4;
    // const nextHeight = 4;
    // const numberOfBloxMini = (nextWidth * nextHeight);

    const colours = [
        'MidnightBlue',
        'Green',
        'Orange',
        'HotPink',
        'DarkRed',
        'Brown',
        'Magenta'
    ];


    // create a function that toggles the hamburger navigation menu
    toggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // create a function that toggles the music on or off using a button click
    soundButton.addEventListener('click', () => {
        if (gameMusic.muted == false) {
            gameMusic.muted = true;
            soundButton.innerHTML = 'Music Paused';
        } else {
            gameMusic.muted = false;
            gameMusic.play();
            gameMusic.volume = 0.3;
            gameMusic.loop = true;
            soundButton.innerHTML = 'Music Playing';
        }
    });

    /**
     * Create the arrays for each of the 7 Tetrimino shapes
     * represented by q, p, s, z, t, b and i
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

    const sTetrimino = [
        [width * 2, width * 2 + 1, width + 1, width + 2],
        [0, width, width + 1, width * 2 + 1],
        [2, 1, width + 1, width],
        [width * 2 + 2, width + 2, width + 1, 1]
    ];

    const zTetrimino = [
        [width, width + 1, width * 2 + 1, width * 2 + 2],
        [1, width + 1, width, width * 2],
        [0, 1, width + 1, width + 2],
        [width * 2 + 1, width + 1, width + 2, 2]
    ];

    const tTetrimino = [
        [1, width, width + 1, width + 2],
        [width + 2, 1, width + 1, width * 2 + 1],
        [width * 2 + 1, width, width + 1, width + 2],
        [width, 1, width + 1, width * 2 + 1]
    ];

    //square tetrimino - called b for block
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

    //create the first position of the tetrimino in the display grid so the player can see whats up next
    const  nextTetrimino = [
        [2, 1, width + 1, width * 2 + 1], //pTetrimino
        [0, 1, width + 1, width * 2 + 1], //qTetrimino
        [width * 2, width * 2 + 1, width + 1, width + 2], //sTetrimino
        [width, width + 1, width * 2 + 1, width * 2 + 2], //zTetrimino
        [1, width, width + 1, width + 2], //tTetrimino
        [0, 1, width, width + 1], //bTetrimino
        [1, width + 1, width * 2 + 1, width * 3 + 1], //iTetrimino
    ];

    const theTetriminos = [pTetrimino, qTetrimino, sTetrimino, zTetrimino, tTetrimino, bTetrimino, iTetrimino];
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
            blox[currentPosition + index].style.backgroundColor = colours[random];
        });
    }
    //console.log(draw()); //testing to see if a random tetrimino appears on the grid

    //remove the tetrimino from the grid with an undraw function
    function undraw() {
        current.forEach(index => {
            blox[currentPosition + index].classList.remove('tetrimino');
            blox[currentPosition + index].style.backgroundColor = '';
        });
    }

    //add interval to move the tetrimino down the grid
    //this will be used to introduce difficulty by speeding the drop rate up
    //timerId = setInterval(moveDown, 1000);

    // start button acts as start/pause game button
    startButton.addEventListener('click', () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
            startButton.innerHTML = 'Game Paused'; //change text to show gameplay is paused
        } else {
            draw();
            timerId = setInterval(moveDown, 1000);
            startButton.innerHTML = 'Started'; //change text to show gameplay is running
            nextUp();
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
            currentPosition = 4;
            draw();
            addScore();
            gameOver();
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
        event.preventDefault(); // prevents default screen movement when pressing the arrow keys

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

    //create event listener to listen for mouse clicks and invoke the control functions
    const leftButton = document.getElementById('left');
    const rotateButton = document.getElementById('rotate');
    const rightButton = document.getElementById('right');
    const downButton = document.getElementById('down');
    

    leftButton.addEventListener('click', () => {
        moveLeft();
    });
    rotateButton.addEventListener('click', () => {
        turnShape();
    });
    rightButton.addEventListener('click', () => {
        moveRight();
    });downButton.addEventListener('click', () => {
        moveDown();
    });

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

    //create function to add score to game for clearing lines
    function addScore() {
        for (let i = 0; i < 199; i += width) { // for loop to iterate through the entire grid
            const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9];

            if (row.every(index => blox[index].classList.contains('taken'))) {
                score += 15; //increment the player score by 15 for every line cleared
                playerScore.innerHTML = score;
                lines += 1; //add 1 to the player dashboard to show the player how many lines they've cleared
                gameLine.innerHTML = lines; {
                    if (lines % 5 === 0 && lines < 1001) { //increment the level for every 5 lines cleared
                        level += 1;
                        playerLevel.innerHTML = level;
                    }
                }

                row.forEach(index => {
                    blox[index].classList.remove('taken');
                    blox[index].classList.remove('tetrimino');
                    blox[index].style.backgroundColor = '';
                });
                const bloxRemoved = blox.splice(i, width);
                blox = bloxRemoved.concat(blox);
                blox.forEach(cell => grid.appendChild(cell));
            }
        }
    }

    //create a function to check the gameOver conditions
    function gameOver() {
        if (current.some(index => blox[currentPosition + index].classList.contains('taken'))) { // check to see if a taken shape is at the original index position 
            clearInterval(timerId); // stop the moveDown() function
            startButton.innerHTML = 'Game Over';
            startButton.disabled = true; //disable the start button so that the game cannot continue
        }
    }

    // //create a next up display grid so the player knows which tetrimino is falling next
    // function createNextUpGrid() {
    //     for (let i = 0; i <= numberOfBloxMini; i++) {
    //         const cell = document.createElement('div');
    //         nextCells.push(cell);
    //         // cell.innerHTML = i     // label the cells
    //         nextGrid.appendChild(cell);
    //     }
    // }
    // createNextUpGrid();
    // const nextIndex = 0;
    // const bloxMini = document.querySelectorAll('.display-grid div');

    // //display next up tetrimino in the display grid
    // function nextUp() {
    //     bloxMini.forEach(blox => {
    //         blox.classList.remove('tetrimino');
    //     });
    //     theTetriminos[random].forEach( index => {
    //         bloxMini[nextIndex + index].classList.add('tetrimino');
    //     });
    // }

    //create a high score function to store the players highest scores locally
    const highestScoreResults = document.getElementsByClassName('highest-score');

    let highestScore = window.localStorage.getItem('highScore');
    // let playerScore = 0;
    // let gameLine = 0;
    // let playerLevel = 0;

    function updateScores() {
        playerCurrentScore.innerHTML = playerScore;
        playerCurrentLevel.innerHTML = playerLevel;
        highestScoreResults.innerHTML = highScore === null ? 0 : highScore;
    }

    //storing scores locally
    function updateHighScores() {
        if (playerScore > highScore) {
            highScore = playerScore;
        }
    }
    document.addEventListener(updateScores());
    
    



});