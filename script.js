let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let turnO = false;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if(box.innerText === '') {
            if(turnO) {
                box.innerText = 'O';
                turnO = false;
            } 
            else {
                box.innerText = 'X';
                turnO = true;
            }
        }
        box.disabled = true;

        checkWinner();
    })
})

function checkWinner() {
    winPatterns.forEach((win) => {
        if(boxes[win[0]].innerText == boxes[win[1]].innerText && boxes[win[1]].innerText == boxes[win[2]].innerText && boxes[win[1]].innerText !== "") {
            let winningText = document.createElement('h2');
            winningText.innerText = `The player playing ${boxes[win[0]].innerText} has won!`;
            winningText.style.textAlign = 'center';
            winningText.classList.add('winner');
            winningText.style.marginTop = '4vmin';
            winningText.style.color = 'white';
            reset.after(winningText);
            turnO = false;
        }
    })
}

reset.addEventListener('click', (e) => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    let winningText = document.querySelector('.winner')
    winningText.remove();
})
