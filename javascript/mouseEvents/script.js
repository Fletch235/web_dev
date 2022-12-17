const can1 = document.getElementById("1")
const can2 = document.getElementById("2")


let startX;
let startY;

can2.addEventListener("mousedown", function() {
  startX = event.clientX-can2.offsetLeft;
  startY = event.clientY-can2.offsetTop;
  console.log(startX,startY);
});
can2.addEventListener("mouseup", function() {
  var ctx = can2.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = "1";
  console.log(startX, startY, event.clientX-can2.offsetLeft, event.clientY-can2.offsetTop);
  ctx.rect(startX, startY, event.clientX-startX, event.clientY-startY);
  ctx.stroke();
});
