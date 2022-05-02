const cellElements =  document.querySelectorAll('[data-cell]')

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true}) // the once:true makes it so that you can only click the space one time, the console.log is to prove that
})

function handleClick(e){
    console.log('clicked')
}

