const tf = require('@tensorflow/tfjs');
var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;
    boxSize = 40;
var x = "white",
    y = 2;
var model;
var weights;
 function init() {
 //   model = await tf.loadLayersModel('model/model.json')
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");

    canvas2 = document.getElementById('can2');
    ctx2 = canvas2.getContext("2d");
    w = canvas.width;
    h = canvas.height;
    ctx.fillStyle = "rgba(255,255,255,255)";
    ctx.fillRect(0,0,w,h);
    ctx2.fillStyle = "rgba(255,255,255,255)";
    ctx2.fillRect(0,0,w,h);
    canvas.addEventListener('mousedown', handleClick);
    canvas.addEventListener('mouseup', handleRelease)
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseout', handleRelease);
    canvas2.addEventListener('mouseup', pickColor)
    canvas2.addEventListener('mousedown', pickColor)

    f1 = document.getElementById("f1");
    f2 = document.getElementById("f2");
    f1.addEventListener("change", picked1);
    f2.addEventListener("change", picked2);
    var x = canvas2.width / 2;
    var y = canvas2.height / 2;
    var radius = 32;
    var counterClockwise = false;

    for(var angle=0; angle<=360; angle+=1){
      var startAngle = (angle-2)*Math.PI/180;
      var endAngle = angle * Math.PI/180;
      ctx2.beginPath();
      ctx2.moveTo(x, y);
      ctx2.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      ctx2.closePath();
      ctx2.fillStyle = 'hsl('+angle+', 100%, 50%)';
      ctx2.fill();
    }
}
var bool = false;
function pickColor(e)
{
  var pd = ctx2.getImageData(e.offsetX, e.offsetY, 1, 1).data;
  x = `rgba(${pd[0]},${pd[1]},${pd[2]},255)`
}

function handleClick(e) {

  if(e.shiftKey)
  {
    var pd = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
    x = `rgba(${pd[0]},${pd[1]},${pd[2]},255)`
  } else {
     bool = true;
  }
 // console.log(e)
}
function handleRelease(e) {
  bool = false;


}
function draw(e) {
  if(!bool)
   return;
  ctx.fillStyle = x;
  ctx.fillRect(Math.floor(e.offsetX / boxSize) * boxSize,
    Math.floor(e.offsetY / boxSize) * boxSize,
    boxSize, boxSize);
}
function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;

}

function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
}
function picked1(e)
{
  console.log(e);
}
async function picked2(e)
{
  const uploadJSONInput = document.getElementById('f1');
  const uploadWeightsInput = document.getElementById('f2');
  const model = await tf.loadLayersModel(tf.io.browserFiles(
    [uploadJSONInput.files[0], uploadWeightsInput.files[0]]));

}
function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}
//   <div style="position:absolute;top:20%;left:83%;">Eraser</div>
