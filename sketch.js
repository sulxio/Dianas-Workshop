
var variable = 0;
let button;
//The setup function only happens once

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	button = createButton('useless button');
	button.position(94,622);
	
}


//The draw function happens over and over again
function draw() {
  background(123,17,19); //an RGB color for the canvas' background
  //circle
  stroke(183,135,39); // an RGB color for the circle's border
  fill(245,222,179); // an RGB color for the inside of the circle
  strokeWeight(5);
  ellipse(300,300,variable,variable); // center of canvas, 20px dia
  //variable = variable +20; //expands with increase of + __ smaller number the slower/ high number the faster 
  
  fill(249,184,229,100); //  (the last number refers to transparency (min. 0, max. 255)
  stroke(221,209,243);//lavender
  strokeWeight(5);
  rect(variable,variable,40,100); //horizontal,vertical,width,length
  line(variable,variable,290,500);
  
  fill(133,117,78,160);
  stroke(128,128,0);
  strokeWeight(4);
  ellipse(mouseX,mouseY,variable,variable);
}

function mousePressed() { 
	if (variable >= 200){
		variable = 0;
	}
	else {
		variable = variable +3;
	}
	}

//function mouseReleased() { 
//	noLoop();
//}


