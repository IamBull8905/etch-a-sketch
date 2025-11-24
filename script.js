const container = document.querySelector(".container");
const button = document.querySelector("button");
let size = 16;

function chooseColour() {
    return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)';
};

function setGridSize(size) {
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("tile");
            newDiv.addEventListener("mouseover", () => newDiv.style.backgroundColor = chooseColour());
            rowDiv.appendChild(newDiv);
        };
        container.appendChild(rowDiv);
    };
};


setGridSize(size);

button.addEventListener("click", () => {
    let userInput = Number(prompt("Please enter the dimensions of the grid you desire (max 100x100): "));
    while (isNaN(userInput)) {
        userInput = Number(prompt("Enter a valid number please!"));
    };
    if (userInput > 100 || userInput <= 0) {
        alert("Invalid input");
    } else {
        size = userInput;
        setGridSize(size);
    };
});