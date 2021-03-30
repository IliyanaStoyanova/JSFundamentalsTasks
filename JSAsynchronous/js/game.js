const divContainer = document.querySelector("div.container");
const keyUp = document.querySelector("div.arrowTop");
const keyDown = document.querySelector("div.arrowBottom");
const keyLeft = document.querySelector("div.arrowLeft");
const keyRight = document.querySelector("div.arrowRight");
const result = document.querySelector("div.result");

const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const map = {x:0, y:0, width: 600, height: 450, color: "white" };
const player = {x:0, y:0, width: 100, height: 60, color: "blue" };
const lineTop = {x:0, y:10, width: 100, height: 1, color: "black" };
const lineLeft = {x:10, y:0, width: 1, height: 100, color: "black"};
const lineRight = {x:10, y:0, width: 1, height: 100, color: "black"};

let intervalID = "";
let dx = 0;
let dy = 0;

divContainer.addEventListener('load', startGame());

function startGame() {    
    canvas.setAttribute("width", 600);
    canvas.setAttribute("height", 600);
    
    clearProperties();
    drawLine();
    resetRectangle();
}
function resetRectangle() {
    context.beginPath();
    player.x = map.x + (map.width - player.width) * .5;
    player.y = map.y + (map.height - player.height) * .5;

    context.fillStyle = player.color;
    context.fillRect (player.x,player.y,player.width,player.height);
    context.stroke();
}
function drawLine(){
    context.beginPath();
    context.fillStyle = map.color;
    context.fillRect (map.x,map.y,map.width,map.height);
    context.stroke();

    context.beginPath();
    lineTop.x = map.x + (map.width - lineTop.width) * .5;
    context.fillStyle = lineTop.color;
    context.fillRect(lineTop.x, lineTop.y, lineTop.width, lineTop.height);
    context.stroke();

    context.beginPath();
    lineLeft.y = map.y + (map.height - lineLeft.height) * .5;
    context.fillStyle = lineLeft.color;
    context.fillRect(lineLeft.x, lineLeft.y, lineLeft.width, lineLeft.height);
    context.stroke();

    context.beginPath();
    lineRight.x = map.x + (map.width - lineRight.width - 10);
    lineRight.y = map.y + (map.height - lineRight.height) *.5;
    context.fillStyle = lineRight.color;
    context.fillRect(lineRight.x, lineRight.y, lineRight.width, lineRight.height);
    context.stroke();
}
function clearProperties(){
    result.innerHTML = "";
    context.clearRect(0, 0, map.width, map.height);
}
function drawRectangle () {
    clearProperties();
    drawLine();
    context.fillStyle = player.color;
    context.fillRect (player.x,player.y,player.width,player.height);
}

function contains(collisionBounds, target) {
    const checkCollision = new Promise((resolve, reject) => {
        let result = (target.x + target.width >= collisionBounds.x &&
            target.x <= collisionBounds.x + collisionBounds.width &&
            target.y + target.height >= collisionBounds.y &&
            target.y <= collisionBounds.y + collisionBounds.height
            );
       return result ? resolve(true) : reject(false);
    });
    return checkCollision;
}

keyUp.addEventListener("click", function(e){
    clearInterval(intervalID);  
    intervalID  = setInterval(async function(){
        drawRectangle();      
        let resCollision = Promise.resolve(contains(player, lineTop));
        await resCollision.then(function(){  
            clearInterval(intervalID);
            result.innerHTML = "Line Top";
        }).catch(function(){
            dy = 2; dx = 0;
            player.y -= dy;
        });
    },  50);
});
keyDown.addEventListener("click", function(e){
    clearInterval(intervalID);
    intervalID = setInterval(async function(){
        drawRectangle();
        dy = -2; dx = 0;
        player.y += -dy;
    }, 50);
});
keyLeft.addEventListener("click", function(e){
    clearInterval(intervalID);
    intervalID = setInterval(async function(){
        drawRectangle();
        let resCollision = Promise.resolve(contains(player, lineLeft));
        await resCollision.then(function(){  
            clearInterval(intervalID);
            result.innerHTML = "Line Left";
        }).catch(function(){
            dy = 0; dx = 2
            player.x -= dx;
        });
    }, 50);
});
keyRight.addEventListener("click", function(e){
    clearInterval(intervalID);
    intervalID = setInterval(async function(){
        drawRectangle();
        let resCollision = Promise.resolve(contains(player, lineRight));
        await resCollision.then(function(){
            clearInterval(intervalID);
            result.innerHTML = "Line Right";
        }).catch(function(){  
            dy = 0; dx = -2
            player.x += -dx;
        });
    }, 50);
});