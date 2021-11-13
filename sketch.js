let strokeColor1; 
let fillColor1;

let cellStartX;
let cellStartY;
let cellEndX;
let cellEndY;
let incrementX1;
let incrementY1;
let incrementX2;
let incrementY2;
let boxSize;

function setup() {
  // createCanvas(400, 400);
  let renderer = createCanvas(400, 400);
  renderer.parent("canvas");

  cellStartX = 0;
  cellStartY = 0;
  incrementX1 = 0;
  incrementY1 = 0;
  incrementX2 = 0;
  incrementY2 = 0;
  boxSize = 20;
  cellEndX = boxSize;
  cellEndY = boxSize;

}

function draw() {

   let bgColor  = color(150, 250, 50);
   background(bgColor);

   strokeColor1 = color(250, 100, 250);
   fillColor1 = color(bgColor);
   
   fill(20, 20, 20);
   circle(0, 0, 100);

   cell(cellStartX, cellStartY, boxSize);
   cell(cellStartX + boxSize, cellStartY, boxSize);
   cell(cellStartX + boxSize*2, cellStartY, boxSize);
   cell(cellStartX, cellStartY + boxSize, boxSize);
  //  cell(cellStartX, cellStartY + boxSize, cellEndX, cellEndY);


    // for (let i = 0; i<=10; i++) {

    //   for (let j = 0; j <= width; j+=boxSize) {
    //     cell(cellStartX + incrementX1, cellStartY + incrementY1, cellEndX + incrementX2, cellEndY + incrementY2);
    //     incrementX1 += 0;
    //     print(incrementX1);
    //   }
    // }
}


function cell(x1, y1, s){
  stroke(strokeColor1);
  fill(fillColor1);
  rect(x1, y1, s, s);
}
