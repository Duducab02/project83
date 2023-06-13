canvas= document.getElementById("myCanvas") 
var mouseevent="empty"
var lastpositionx,lastpositiony;
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mouseevent="mousedown";

}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    posicaoxatual=e.clientX-canvas.offsetLeft;
    posicaoyatual=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth=4;
        ctx.moveTo(lastpositionx,lastpositiony);
        ctx.lineTo(posicaoxatual,posicaoyatual)
        ctx.stroke();
    }
    lastpositionx=posicaoxatual;
    lastpositiony=posicaoyatual;

}
var lasttouchx, lasttouchy;
var widht= screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(widht<992){
    document.getElementById("myCanvas").width=newwidth
    document.getElementById("myCanvas").height=newheight
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e){
    lasttouchx=e.touches[0].clientX-canvas.offsetLeft;
    lasttouchy=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove(e){
    atualtouchx=e.touches[0].clientX-canvas.offsetLeft
    atualtouchy=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2;
    ctx.moveTo(lasttouchx, lasttouchy);
    ctx.lineTo(atualtouchx, atualtouchy)
    ctx.stroke()
    lasttouchx=atualtouchx;
    lasttouchy=atualtouchy;
}
