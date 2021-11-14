var ticker = 0;

var strokeColor1; 
var fillColor1;
var fillColor2;

var cellStartX;
var cellStartY;

let red = 250;
let green = 250;
let blue = 250;

var boxSize = 5;


function setup() {
  // createCanvas(400, 400);
  let renderer = createCanvas(400, 400);
  renderer.parent("canvas");

  frameRate(24);

}

function draw() {

  ticker++;
  var time = ticker/0.1;

  cellStartX = 0;
  cellStartY = 0;

   let bgColor  = color(150, 150, 50);
   background(bgColor);
   
   strokeColor1 = color(150, 150, 0, 0);
   fillColor1 = color(50, 50, 50);

   var redMod = 250;
   var greenMod = 250;
   var blueMod = 150;

   var amp = 250;
   var freq = 1;
   var inc = 0;
   var phase = 0; 
   var vertShift = -250;

   inc+=time/50;

   print(inc);

   drawGrid(0, 0, 100, 100, inc);
   drawGrid(20, 20, 70, 70, -inc*2);
   drawGrid(40, 40, 60, 60, inc);
   drawGrid(60, 60, 50, 50, -inc*2);
   drawGrid(80, 80, 40, 40, inc);
   drawGrid(0, 150, 100, 10, inc-0.5);


  function drawGrid(startX = 0, startY = 0, sizeX = 10, sizeY = 10, pOffset = 0) {
    
    for (i = 0; i <= sizeX; i += 1) {
      
      var boxIncX = boxSize * i;
      var sine = sineFunc(amp, inc, phase + pOffset, freq, vertShift);

      fillColor2 = color(red + sine + redMod, green + sine + greenMod, blue + sine + blueMod);
      
      phase++;
      for (j = 0; j <= sizeY; j += 1) {

        var boxIncY = boxSize * j;
        cell((cellStartX+startX) + boxIncX, (cellStartY+startY) + boxIncY, boxSize);


      }
    }
  }

  //  print("a = " + a + ", inc = " + inc);

}


function sineFunc(amp, a, phase, freq, vertShift) {
  return (amp * sin(((a) + phase) / (freq)) + vertShift);
}

function cell(x1, y1, s){
  stroke(strokeColor1);
  fill(fillColor2);
  rect(x1, y1, s, s);
}


function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
