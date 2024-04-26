let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true; //  playerX, playero
let count = 0;
const winPattterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (turnO) {
            box.innerHTML = 'O';
            turnO = false;
        }
        else {
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkFunction();
        console.log(count); 
        if (count === 9) {
            displayDraw();
        };
    });

});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

};

const displayWinner = (winner) => {
    msg.innerText = `Congratulation Winner Is ${winner}`;
    console.log(msgContainer);
    msgContainer.classList.remove("hide");
};

const checkFunction = () => {
    for (pattern of winPattterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                displayWinner(pos1Val);
                disableBoxes();


            }
        }

    };

};


newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);


if (count === "9") {
    // console.log(count);  
    displayDraw();
};

const displayDraw = () => {

    msg.innerText = `Oops! Game is Draw`;
    console.log(msgContainer);
    msgContainer.classList.remove("hide");

}