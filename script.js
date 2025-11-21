const container = document.querySelector(".container");
const button = document.querySelector("button");
let size = 16;

for (let i = 0; i < 32; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");
    for (let j = 0; j < 32; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("tile");
        newDiv.addEventListener("mouseover", () => newDiv.style.backgroundColor = "#7851A9");
        rowDiv.appendChild(newDiv);
    };
    container.appendChild(rowDiv);
};



// setGridSize(size);

button.addEventListener("click", () => {
    let userInput = Number(prompt("Please enter the dimensions of the grid you desire (max 100x100): "));
    while (isNaN(userInput)) {
        userInput = Number(prompt("Enter a valid number please!"));
    };
    if (userInput > 100 || userInput <= 0) {
        console.log("Invalid input");
    } else {
        size = userInput;
    };
    setGridSize(size);
});