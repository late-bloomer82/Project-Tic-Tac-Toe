//Selecting dom nodes for later usages.
const topLeft = document.getElementById('squareOne');
const topCenter = document.getElementById('squareTwo');
const topRight = document.getElementById('squareThree');
const middleLeft = document.getElementById('squareFour');
const middleCenter = document.getElementById('squareFive');
const middleRight = document.getElementById('squareSix');
const bottomLeft = document.getElementById('squareSeven');
const bottomCenter = document.getElementById('squareEight');
const bottomRight = document.getElementById('squareNine');
const squares = document.querySelectorAll('.square')
let resultMessage = document.querySelector('.resultMessage')
let playerScore = document.querySelector('.playerScore')
let aiScore = document.querySelector('.aiScore');
let userName = document.getElementById('playerName');
let submitButton = document.getElementById('submitButton')
let inputContainer = document.querySelector('.playerInput')



// tictactoe gameboard array
const board = [
    topLeft, topCenter, topRight,
    middleLeft, middleCenter, middleRight,
    bottomLeft, bottomCenter, bottomRight
];

//passing the user input value to the player score
submitButton.addEventListener('click', ()=>{
    playerScore.textContent = userName.value + ' : 0';
    inputContainer.remove();
    
})


//Selecting X mark img for the Human
const xfilePath = 'pictures/xMark.jpg';
const xMark = document.createElement('img');
xMark.className = 'xMark';
xMark.src = xfilePath;


//Selecting O mark img for the AI
const ofilePath = 'pictures/oMark.jpg';
const oMark = document.createElement('img');
oMark.className = 'oMark';

oMark.src = ofilePath;



//Creating Computer game logic
function Ai() {
    const availableSquares = [];

    for (let i = 0; i < board.length; i++) {
        //checks if square is empty
        if (board[i].childElementCount === 0) {
            availableSquares.push(i);
        }

    }

    //Select a random square and add the O to it.
    if (availableSquares.length > 1) {
        const randomIndex = Math.floor(Math.random() * availableSquares.length)
        const randomSquare = board[availableSquares[randomIndex]]


        randomSquare.appendChild(oMark.cloneNode(true));
    }
}

let playerCount = 0;
let aiCount = 0;
let gameEnded = false;

//EventListener for clicking the grid squares
squares.forEach(square => {


    //Function for appending the x and o markers after each click, also checking win con
    const click = () => {
        
        //Error handling
        if(square.childElementCount>0){
            return
        }
        if(gameEnded){
            return;
        }

        //Appending the X on the square
        square.appendChild(xMark.cloneNode(true));
        
        
        //Computer makes his move after the player makes his.
        Ai()


        //Define winning logic

        //Player
        const a = topLeft.querySelector('.xMark') != null;
        const b = topCenter.querySelector('.xMark') != null;
        const c = topRight.querySelector('.xMark') != null;
        const d = middleLeft.querySelector('.xMark') != null;
        const e = middleCenter.querySelector('.xMark') != null;
        const f = middleRight.querySelector('.xMark') != null;
        const g = bottomLeft.querySelector('.xMark') != null;
        const h = bottomCenter.querySelector('.xMark') != null;
        const i = bottomRight.querySelector('.xMark') != null;
        const checkBoardFull = board.every(square =>square.childElementCount>0)

        //AI
        const A = topLeft.querySelector('.oMark') != null;
        const B = topCenter.querySelector('.oMark') != null;
        const C = topRight.querySelector('.oMark') != null;
        const D = middleLeft.querySelector('.oMark') != null;
        const E = middleCenter.querySelector('.oMark') != null;
        const F = middleRight.querySelector('.oMark') != null;
        const G = bottomLeft.querySelector('.oMark') != null;
        const H = bottomCenter.querySelector('.oMark') != null;
        const I = bottomRight.querySelector('.oMark') != null;


        //Player conditionals
        //rows
        if (a && b && c || d && e && f || g && h && i) {
            resultMessage.textContent = userName.value + ' wins!';
            gameEnded = true;
            playerCount++
            playerScore.textContent = userName.value + " : " + playerCount;
            return
            
        }

        //columns
        if (a && d && g || b && e && h || c && f && i) {
            resultMessage.textContent = userName.value + ' wins!';
            gameEnded = true;
            playerCount++
            playerScore.textContent = userName.value + " : " + playerCount;
            return

        }

        //diagonals
        if (a && e && i || c && e && g) {
            resultMessage.textContent = userName.value + ' wins!';
            gameEnded = true;
            playerCount++
            playerScore.textContent = userName.value + " : " + playerCount;
            return
        }

        
        //AI conditionals
        //rows
        if (A && B && C || D && E && F || G && H && I) {
            resultMessage.textContent = 'Computa wins!';
            gameEnded = true;
            aiCount++
            aiScore.textContent = "Computa : " + aiCount;
            return
        }

        //columns
         if (A && D && G || B && E && H || C && F && I) {
            resultMessage.textContent = 'Computa wins!';
            gameEnded = true;
            aiCount++
           aiScore.textContent = "Computa : " + aiCount;
            return
        }

        //diagonals
         if (A && E && I || C && E && G) {
            resultMessage.textContent = 'Computa wins!';
            gameEnded = true;
            aiCount++
            aiScore.textContent = "Computa : " + aiCount;
            return

        }

        if(checkBoardFull){
            resultMessage.textContent = 'Draw'
        }}
   square.addEventListener('click', click)
})



//Restart Button

const newGame = document.getElementById('restart')

newGame.addEventListener('click',() =>{
    squares.forEach(square =>{
        square.innerHTML = '';
        gameEnded = false;
        resultMessage.innerHTML = '';
        
    })
})
