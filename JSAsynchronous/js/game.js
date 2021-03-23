const divContainer = document.querySelector("div.container");
const keyUp = document.querySelector("div.arrowTop");
const keyDown = document.querySelector("div.arrowBottom");
const keyLeft = document.querySelector("div.arrowLeft");
const keyRight = document.querySelector("div.arrowRight");
const result = document.querySelector("div.result");
const canvas = document.querySelector("canvas");
const rectWidth = 100;
const rectHeight = 60;
let x = 0;
let y = 0;
let arrRectX = [];
let arrRectY = [];
let arrLineX = [];
let arrLineY = [];

function redraw(context) {
    clear(context);
    const rectX = context.canvas.width/2-50+x;
    const rectY = context.canvas.height/2-30+y;
    drawLine(context);
    rectangleComponent(context, rectWidth, rectHeight, "blue", rectX, rectY);
}

function clear(context) {
    arrLineX = [];
    arrLineY = [];
    arrRectX = [];
    arrRectY = [];
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function startGame() {    
    canvas.width = 800;
    canvas.height = 600;   
    const context = canvas.getContext("2d");  
    redraw(context);
}

function check(context) {    
    result.innerHTML = "";
    if(context.canvas.height/2+30 - y === context.canvas.height-50){
        let equal = arrRectX.filter(item=>arrLineX.includes(item));
        if(Object.keys(equal).length > 0){
           result.innerHTML = "Line Top";
        }
    }
    if(context.canvas.width/2 -50 + x === 50){
        let equal = arrRectY.filter(item=>arrLineY.includes(item));
        if(Object.keys(equal).length > 0){
           result.innerHTML = "Line Left";
        }
    }
    if(context.canvas.width/2 + 50 + x === context.canvas.width-50){
        let equal = arrRectY.filter(item=>arrLineY.includes(item));
        if(Object.keys(equal).length > 0){
           result.innerHTML = "Line Right";
        }
    }
}
function rectangleComponent(context, width, height, color, x, y) {
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
    for(let i=x; i<=x+width; i++){
        arrRectX.push(i);
    }
    for(let i=y; i<=y+height; i++){
        arrRectY.push(i);
    }
    context.stroke();
    check(context);
}

function drawLine(context){
    context.strokeStyle = "#000";
    context.beginPath();
    context.moveTo(context.canvas.width/2-50, 50);
    context.lineTo(context.canvas.width/2+50, 50);
    for(let i=context.canvas.width/2-50; i<=context.canvas.width/2+50; i++){
        arrLineX.push(i);
    }
    context.stroke();
    context.beginPath();
    context.moveTo(50, context.canvas.height/2-50);
    context.lineTo(50, context.canvas.height/2+50);
    for(let i=context.canvas.height/2+50; i>=context.canvas.height/2-50; i--){
        arrLineY.push(i);
    }
    context.stroke();
    context.beginPath();
    context.moveTo(context.canvas.width-50, context.canvas.height/2-50);
    context.lineTo(context.canvas.width-50, context.canvas.height/2+50);
    context.stroke();
}

divContainer.addEventListener("load", startGame());

keyUp.addEventListener("click", function(e){
    y-=5;
    startGame();
});
keyDown.addEventListener("click", function(e){    
    y+=5;
    startGame();
});
keyLeft.addEventListener("click",function(e){
    x-=5;
    startGame();
});
keyRight.addEventListener("click",function(e){
    x+=5;
    startGame();
});