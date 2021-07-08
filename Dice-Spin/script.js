var dice = document.getElementById("dice");
var diceNumber = document.getElementById("dice-number");
function main() {
    changeDiceNumber();
}

function changeDiceNumber() {
    let numberArray = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    let colorArray = [
        "#FE0000",
        "#FF7900",
        "#FFFF01",
        "#304FFF",
        "#7B20A3",
        "#13DD17",
    ];
    let num = getDiceNumber();
    diceNumber.innerHTML = numberArray[num];
    dice.style.background = colorArray[num];
}

function getDiceNumber() {
    number = Math.ceil(Math.random() * 6) - 1;
    return number;
}
