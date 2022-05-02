const cellElements =  document.querySelectorAll('[data-cell]')
const xClass = 'x';
const circClass = 'circ'
const board = document.getElementById('board');
const winningMessageE = document.getElementById('winningMessage');
const winningCombo =[
    [0,1,2], //row wins
    [3,4,5],
    [6,7,8],
    [0,3,6], // coloumn wins
    [1,4,7],
    [2,5,8],
    [0,4,8], //diagonal wins
    [2,4,6]
]
const winningMessageTextE = document.querySelector('[data-winningMesagetText]');
const restartButton = document.getElementById('restartButton')
let circTurn;

startGame();

restartButton.addEventListener('click', startGame)


function startGame(){ // this function will make the hover effect happen on the first instance of instance of the game.
    circTurn = false; //starts the game on X
    cellElements.forEach(cell => {
        cell.classList.remove(xClass)
        cell.classList.remove(circClass)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true}) // the once:true makes it so that you can only click the space one time, the console.log is to prove that
    })
    setBoardHoverClass();
    winningMessageE.classList.remove('show') // the startGame function sets everything up but this line will allow for everything to be taken down aswell.
}
function handleClick(e){
    console.log('clicked')
    const cell = e.target; // ".target is whatever is being clicked on"
    const currentClass = circTurn ? circClass :xClass; /* sets class based on what circTurn is equal too, basically says "is it circ's turn? yes, the current class is circClass, or no, then the current class is xClass" */

    //put mark
    placeMark(cell, currentClass);
    //check for win
    if(checkWin(currentClass)){
        endGame(false) // this is whether or not its a draw
    } else if(isDraw()){ //check for draw
        endGame(true);
    } else {
        swapTurns(); //switch turns
        setBoardHoverClass();
    }
}
function endGame(draw){
    if(draw){
        winningMessageTextE.innerText = 'Draw!'
    }else{
        winningMessageTextE.innerText = `${circTurn ? "O," : "X,"} You're a winner baby!`
    }
    winningMessageE.classList.add('show') // this toggles that screen that shows the winner and the reset button
}
function isDraw(){
    return [...cellElements].every(cell =>{
        return cell.classList.contains(circClass) ||
        cell.classList.contains(xClass)
    })
}
function placeMark(cell, currentClass){
    cell.classList.add(currentClass) /* this goes through and based on the answer from currentClass changes the class of the cells to either X or O, basically telling the CSS which character to display */

}
function swapTurns(){
    circTurn = !circTurn; // takes circTurn and sitches it, which allows the switch from X to O
}
function setBoardHoverClass(){ // will allow the hovering effect to work by switching the class of the board
    board.classList.remove(xClass); // this line and the next start by completly stripping board class of a class so its a blank slate.
    board.classList.remove(circClass);
    if(circTurn){ //based on if its circles turn it changes the class accordingly, if circTurn = true, the the boards class is circ
        board.classList.add(circClass)
    } else {
        board.classList.add(xClass)
    }

}

function checkWin(currentClass){
    return winningCombo.some(combo => {
        return combo.every(index =>{
            return cellElements[index].classList.contains(currentClass) //if every single cell in the combo matches then is a win
        })
    })
}


