const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winningStates: [
        //rows
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],

        //columns
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],

        //diagnol
        ['0','4','8'],
        ['2','4','6']
    ]
}

document.addEventListener('click', event =>{
    const target = event.target
    const isCell = target.classList.contains('grid-cell')
    const isDisabled = target.classList.contains('disabled')

    if(isCell && !isDisabled){
        gamexTurn  === true
        ? game.xState.push(cellValue)
        : game.oState.push(cellValue)

    target.classList.add('disabled')
    target.classList.add(game.xTurn ? 'x' : 'o')

    game.xTurn = !game.xTurn
    
    }
    if(!document.querySelectorAll('.grid-cell:not(.disabled)').length){
        document.querySelector('.game-over').classList.add('visible')
        document.querySelector('.game-over-text').textContent = 'Draw!'
    }
})
game.winningStates.forEach(winningStates => {
    const xWins = winningState.every(state => game.xState.includes(state))
    const oWins = winningState.every(state => game.oState(state))

    if(xWins || oWins){
        document.querySelectorAll('.grid-cell').forEach(cell => cell.classList.add('disabled'))
        document.querySelector('.game-over').classList.add('visible')
        document.querySelector('.game-over-text').textContent = xWins
            ? 'X wins!'
            : 'O wins!'
    }
})