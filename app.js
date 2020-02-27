

const game = (function () {

    const gameBoard = [
        { move: '', empty: true }, { move: '', empty: true }, { move: '', empty: true },
        { move: '', empty: true }, { move: '', empty: true }, { move: '', empty: true },
        { move: '', empty: true }, { move: '', empty: true }, { move: '', empty: true }
    ];

    let xTurn = true;
    const xScoreElement = document.querySelector('#x-global-score');
    const oScoreElement = document.querySelector('#o-global-score');
    let oScore = 0;
    let xScore = 0;
    const restartBtn = document.querySelector('#restart')
    const turnDisplayText = document.querySelector('#turn');
    const domPositions = document.querySelectorAll('#position');
    domPositions.forEach(position => {
        position.addEventListener('click', (e) => {

            const targetPosition = e.target.getAttribute('data-index');

            if (gameBoard[targetPosition].empty === false) {
                return
            }
            if (xTurn === true) {
                turnDisplayText.textContent = 'O turn'
                gameBoard[targetPosition].move = 'X';
                gameBoard[targetPosition].empty = false;
                xTurn = false;
                renderArray();
                checkWinner(gameBoard[targetPosition].move);
            } else {
                turnDisplayText.textContent = 'X turn'
                gameBoard[targetPosition].move = 'O';
                gameBoard[targetPosition].empty = false;
                xTurn = true;
                renderArray();
                checkWinner(gameBoard[targetPosition].move);
            }
        });
    });

    restartBtn.addEventListener('click', restartGame);

    function renderArray() {
        gameBoard.forEach((position, index) => {
            domPositions[index].textContent = gameBoard[index].move;
        });
    }

    function checkWinner(move) {


        let checkDraw = 0;
        gameBoard.forEach((position, index) => {
            if (gameBoard[index].empty === false) {
                checkDraw++
            };

        if (checkDraw === 9) {
            turnDisplayText.textContent = 'Draw!'
            domPositions.forEach((pos, index) => {
                domPositions[index].classList.add('winner');
            })
            restartBtn.style.visibility = 'initial';
        }
        }) 

        let lastMove = move;
        if (((gameBoard[0].empty === false && gameBoard[0].move === lastMove) &&
            (gameBoard[1].empty === false && gameBoard[1].move === lastMove) &&
            (gameBoard[2].empty === false && gameBoard[2].move === lastMove))) {
            gameBoard.forEach((position, index) => {
                gameBoard[index].empty = false;
            });
            turnDisplayText.textContent = `${lastMove} wins!`
            domPositions[0].classList.add('winner');
            domPositions[1].classList.add('winner');
            domPositions[2].classList.add('winner');
            restartBtn.style.visibility = 'initial';

            if (lastMove === 'O') {
                ++oScore;
                oScoreElement.textContent = `O: ${oScore}`
            } else {
                xScore++;
                xScoreElement.textContent = `X: ${xScore}`
            }
        }

        if ((gameBoard[3].empty === false && gameBoard[3].move === lastMove) &&
            (gameBoard[4].empty === false && gameBoard[4].move === lastMove) &&
            (gameBoard[5].empty === false && gameBoard[5].move === lastMove)) {
            gameBoard.forEach((position, index) => {
                gameBoard[index].empty = false;
            });
            turnDisplayText.textContent = `${lastMove} wins!`
            domPositions[3].classList.add('winner');
            domPositions[4].classList.add('winner');
            domPositions[5].classList.add('winner');
            restartBtn.style.visibility = 'initial';

            if (lastMove === 'O') {
                oScore++;
                oScoreElement.textContent = `O: ${oScore}`
            } else {
                xScore++;
                xScoreElement.textContent = `X: ${xScore}`
            }
        }

        if ((gameBoard[6].empty === false && gameBoard[6].move === lastMove) &&
            (gameBoard[7].empty === false && gameBoard[7].move === lastMove) &&
            (gameBoard[8].empty === false && gameBoard[8].move === lastMove)) {
            gameBoard.forEach((position, index) => {
                gameBoard[index].empty = false;
            });
            turnDisplayText.textContent = `${lastMove} wins!`
            domPositions[6].classList.add('winner');
            domPositions[7].classList.add('winner');
            domPositions[8].classList.add('winner');
            restartBtn.style.visibility = 'initial';

            if (lastMove === 'O') {
                oScore++;
                oScoreElement.textContent = `O: ${oScore}`
            } else {
                xScore++;
                xScoreElement.textContent = `X: ${xScore}`
            }
        }

        if ((gameBoard[0].empty === false && gameBoard[0].move === lastMove) &&
            (gameBoard[3].empty === false && gameBoard[3].move === lastMove) &&
            (gameBoard[6].empty === false && gameBoard[6].move === lastMove)) {
            gameBoard.forEach((position, index) => {
                gameBoard[index].empty = false;
            });
            turnDisplayText.textContent = `${lastMove} wins!`
            domPositions[0].classList.add('winner');
            domPositions[3].classList.add('winner');
            domPositions[6].classList.add('winner');
            restartBtn.style.visibility = 'initial';

            if (lastMove === 'O') {
                oScore++;
                oScoreElement.textContent = `O: ${oScore}`
            } else {
                xScore++;
                xScoreElement.textContent = `X: ${xScore}`
            }
        }

        if ((gameBoard[1].empty === false && gameBoard[1].move === lastMove) &&
            (gameBoard[4].empty === false && gameBoard[4].move === lastMove) &&
            (gameBoard[7].empty === false && gameBoard[7].move === lastMove)) {
            gameBoard.forEach((position, index) => {
                gameBoard[index].empty = false;
            });
            turnDisplayText.textContent = `${lastMove} wins!`
            domPositions[1].classList.add('winner');
            domPositions[4].classList.add('winner');
            domPositions[7].classList.add('winner');
            restartBtn.style.visibility = 'initial';

            if (lastMove === 'O') {
                oScore++;
                oScoreElement.textContent = `O: ${oScore}`
            } else {
                xScore++;
                xScoreElement.textContent = `X: ${xScore}`
            }
        }

        if ((gameBoard[2].empty === false && gameBoard[2].move === lastMove) &&
            (gameBoard[5].empty === false && gameBoard[5].move === lastMove) &&
            (gameBoard[8].empty === false && gameBoard[8].move === lastMove)) {
            gameBoard.forEach((position, index) => {
                gameBoard[index].empty = false;
            });
            turnDisplayText.textContent = `${lastMove} wins!`
            domPositions[2].classList.add('winner');
            domPositions[5].classList.add('winner');
            domPositions[8].classList.add('winner');
            restartBtn.style.visibility = 'initial';

            if (lastMove === 'O') {
                oScore++;
                oScoreElement.textContent = `O: ${oScore}`
            } else {
                xScore++;
                xScoreElement.textContent = `X: ${xScore}`
            }
        }

        if ((gameBoard[0].empty === false && gameBoard[0].move === lastMove) &&
            (gameBoard[4].empty === false && gameBoard[4].move === lastMove) &&
            (gameBoard[8].empty === false && gameBoard[8].move === lastMove)) {
            gameBoard.forEach((position, index) => {
                gameBoard[index].empty = false;
            });
            turnDisplayText.textContent = `${lastMove} wins!`
            domPositions[0].classList.add('winner');
            domPositions[4].classList.add('winner');
            domPositions[8].classList.add('winner');
            restartBtn.style.visibility = 'initial';

            if (lastMove === 'O') {
                oScore++;
                oScoreElement.textContent = `O: ${oScore}`
            } else {
                xScore++;
                xScoreElement.textContent = `X: ${xScore}`
            }
        }

        if ((gameBoard[2].empty === false && gameBoard[2].move === lastMove) &&
            (gameBoard[4].empty === false && gameBoard[4].move === lastMove) &&
            (gameBoard[6].empty === false && gameBoard[6].move === lastMove)) {
            gameBoard.forEach((position, index) => {
                gameBoard[index].empty = false;
            });
            turnDisplayText.textContent = `${lastMove} wins!`
            domPositions[2].classList.add('winner');
            domPositions[4].classList.add('winner');
            domPositions[6].classList.add('winner');
            restartBtn.style.visibility = 'initial';

            if (lastMove === 'O') {
                oScore++;
                oScoreElement.textContent = `O: ${oScore}`
            } else {
                xScore++;
                xScoreElement.textContent = `X: ${xScore}`
            }
        }

    };

    function restartGame() {

        gameBoard.forEach((position, index) => {
            gameBoard[index].empty = true;
            gameBoard[index].move = '';
        })

        turnDisplayText.textContent = 'X turn';
        xTurn = true;
        domPositions.forEach((position, index) => {
            domPositions[index].classList.remove('winner');
        })
        restartBtn.style.visibility = 'hidden';      
        renderArray();
    }

    return {};
})();



