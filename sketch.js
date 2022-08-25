let frames = 8;
let ancho = 800;
let largo = 900;
let posX;
let posY;

function setup() {
	frameRate(frames);
	translate(width / 2, height / 2);
	createCanvas(ancho, largo);

	plane1 = createSprite(200, 200, 20, 20);
	plane1.shapeColor = (124, 252, 0);

}

function draw() {
	if (keyIsDown(LEFT_ARROW)) {
		  posX -= 5;
	}
	  
	if (keyIsDown(RIGHT_ARROW)) {
		  posX += 5;
	}
	plane.velocity.x = posX;


	clear();
	background(220);
	drawSprites();
}

/*function keyPressed() {
	if(keyCode === LEFT_ARROW != +20){
		posX = -20;
	}else if(keyCode === RIGHT_ARROW != -20){
		posX = +20;
	}
	plane.velocity.x = posX;
}*/