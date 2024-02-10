
const body = document.querySelector("body");
const reset = document.querySelector("#reset");
let val = 16;
function createBoard() {
    const grid = document.createElement("div");
    grid.setAttribute("id","grid");
    body.appendChild(grid);
    for (let i = 0; i < val; i++) {
        for (let i = 0; i < val; i++) {
            const div = document.createElement("div");
            div.className = "pixel";
            grid.appendChild(div);
        }
    }
}
createBoard();
function pixelDraw() {
    let pixelSize = (640/val) + "px";
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.style.width = pixelSize;
        pixel.style.height = pixelSize;
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        })
    })
}
pixelDraw();
reset.addEventListener("click", () => {
    val = parseInt(prompt("Enter an amount of rows/columns", "16"));
    while (val < 0 || val > 100 || (typeof val != "number")) {
        val = parseInt(prompt("Invalid input. Rows & Columns > 0 & < 100 & has to be a number", "16"));
    }
    grid.parentNode.removeChild(grid);
    createBoard();
    pixelDraw();
})


console.log(typeof val)
