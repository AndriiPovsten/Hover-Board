let board = document.querySelector('#board')
let colors = ['red', 'blue', 'green', 'pink', 'yellow', 'orange', 'purple', 'silver', 'brown']
let squares_number = 560;
for (let i = 0; i < squares_number; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    board.append(square)
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}
function setColor(element){
    let color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getColor(){
    let index =  Math.floor(Math.random() * colors.length)
    return colors[index]
}