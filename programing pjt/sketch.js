var diam1=0
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}
//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia
}
//the draw function happens over and over again
function draw() {
	background("#9fcce8");//color for background
	fill(150);//an RGB color for the inside of the circle (the number refers to transparency (min. 0, max. 255))
	stroke("#ffff33");//color for the circles borders
	strokeWeight(5);//border size
	ellipse(400,420,diam1,diam1); // bottom right of canvas
	fill("#ff6699")//an RGB color for the inside of the circle
	ellipse(mouseX,mouseY,50,50);// mouse 
	strokeWeight(0);//border size
	textSize(35);//size of the text
	textFont("Helvetica");//text style
	textStyle(BOLD);//text style
	textAlign(CENTER);//where the text appears
	text("Hey boo!!!",250,250);//text and size of text
	text(mouseX,mouseY,50,50);//numbers that change based on where the mouse is(pixels)
	
	}
function mousePressed(){//makes circle bigger based on the amount of times mouse pressed
	diam1=diam1+5
if (diam1 > 90) {
	diam1 = 0;
}else{diam1 = diam1 +5;
}
}