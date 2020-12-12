const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log("X좌표:"+x+ " Y좌표:" + y);
}

function onMouseDown(event) {
    painting = true;
    console.log(event);
    console.log(painting);
}

function onMouseUp(event) {
    stopPainting();
    console.log(event);
    console.log(painting);
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}