const container = document.querySelector(".container");
let rows = 16;
let columns = 16;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("tile");
        newDiv.addEventListener("mouseover", () => newDiv.style.backgroundColor = "#7851A9");
        container.appendChild(newDiv);
    };
}