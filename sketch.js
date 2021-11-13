var ticker = 0;

var strokeColor1; 
var fillColor1;
var fillColor2;

var cellStartX;
var cellStartY;

var boxSize = 20;


function setup() {
  // createCanvas(400, 400);
  let renderer = createCanvas(400, 400);
  renderer.parent("canvas");

  frameRate(24);

}

function draw() {

  ticker++;
  var time = ticker/0.2;

  cellStartX = 0;
  cellStartY = 0;

   let bgColor  = color(50, 250, 250);
   background(bgColor);
   
   strokeColor1 = color(0);
   fillColor1 = color(50, 50, 50);

   var red = 250;
   var green = 250;
   var blue = 250;
    var redMod = 100;
    var greenMod = 12;
    var blueMod = 0;

   var amp = 100;
   var freq = 1;
   var a = 0;
   var inc = 0; 
   a+=time;
  //  a+=time/1;

  //  print (a);
   

   for (i = 0; i <= width; i+=1.19) {
      
      var boxIncX = boxSize * i;

      var sine = amp * sin((a + inc)/freq);

      fillColor2 = color(red + sine/redMod, green + sine/greenMod, blue + sine/blueMod);

      inc++;
      
      // print(sine);

      for (j = 0; j <= height; j++){  
        var boxIncY = boxSize * j;

        cell(cellStartX + boxIncX, cellStartY + boxIncY, boxSize);


      }
   }

  //  cell(cellStartX + i, cellStartY, boxSize);
  //  cell(cellStartX + boxSize*2, cellStartY, boxSize);
  //  cell(cellStartX, cellStartY + boxSize, boxSize);

}


function cell(x1, y1, s){
  stroke(strokeColor1);
  fill(fillColor2);
  rect(x1, y1, s, s);
}
