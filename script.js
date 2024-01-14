const topLeft = document.getElementById('squareOne');
const topCenter = document.getElementById('squareTwo');
const topRight = document.getElementById('squareThree');
const middleLeft = document.getElementById('squareFour');
const middleCenter = document.getElementById('squareFive');
const middleRight = document.getElementById('squareSix');
const bottomLeft = document.getElementById('squareSeven');
const bottomCenter = document.getElementById('squareEight');
const bottomRight = document.getElementById('squareNine');


//array
const board = [
    topLeft , topCenter, topRight,
    middleLeft,middleCenter, middleRight,
    bottomLeft,bottomCenter, bottomRight
];

const winninCombis = [
    /*rows*/[0,1,2], [3,4,5], [6,7,8],
    /*colums*/[0,3,6],[1,4,7],[2,5,8],
    /*diagonals*/[1,4,8],[2,4,6]
]

//DOM selecting
const squares = document.querySelectorAll('.square')

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



//Creating Computer function
function Ai(){
    const availableSquares = [];

    for(let i = 0; i<board.length; i++){
        //checks if square is empty
        if(board[i].childElementCount === 0){
            availableSquares.push(i);
        }
        
    }
    
    //Select a random square and add the O to it.
    if(availableSquares.length>1){
        const randomIndex = Math.floor(Math.random() * availableSquares.length)
        const randomSquare = board[availableSquares[randomIndex]]
        
            
                randomSquare.appendChild(oMark.cloneNode(true));
            }
        }

      

        
       
    

 

    



//EventListener for clicking the grid squares
squares.forEach(square =>{ 


    //assign a constant to an anyonymous function to use removeEventListner
   const click = () =>{
    
        square.appendChild(xMark.cloneNode(true));
        square.removeEventListener('click', click);
        //Computer makes his move after the player makes his.
        Ai()
        
        
   }
        
    

    square.addEventListener('click',click)
})

