const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const range = document.getElementById("jsRange");

const colors = document.getElementsByClassName("controls__color");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting() {
    painting = true;

}
function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function changeStrokeStyle(event) {
    ctx.strokeStyle = "#800080";
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

if(colors) {
    for(let i=0; i< colors.length; i++) {
        colors[i].addEventListener("onclick", changeStrokeStyle);
    }
}