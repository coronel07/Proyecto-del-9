let frames = 10;
let ancho = 800;
let largo = 800;
let posX;
let posY;
let plane;
let ovni;
let bullets;


function preload(){
	plane = new Sprite(400,650,20,20);
	plane.addImg("./assets/theplane.png");

	ovni = new Sprite(400,50,20,20);
	ovni.addImg("./enemies/ovni.png");

	bullets = new Group();
	bullets.addImg("./assets/bullet.png");
}

function setup() {
	frameRate(frames);
	let canvas = createCanvas(ancho, largo);
	//canvas.parent("canvas-content")
	background(150);
	
	EvilOvni();
}

function draw() {
	clear();
	strokeWeight(3);
	noFill();
	square(0,0,800);

	
	/*for (let s of allSprites) {
		if (s.x < -MARGIN) s.x = width + MARGIN;
		if (s.x > width + MARGIN) s.x = -MARGIN;
		if (s.y < -MARGIN) s.y = height + MARGIN;
		if (s.y > height + MARGIN) s.y = -MARGIN;
	}*/

	
	/*if (kb.pressed('a')) {
		plane.vel.x -= 15;
	}else if (kb.pressed('d')) {
		plane.vel.x += 15;
	}else{
		plane.vel.x = 0;
	}*/
}

function keyPressed(){
	if(keyCode === LEFT_ARROW && keyIsDown){
		plane.vel.x -= 18;
		ovni.vel.x -= 10;
	}
	if(keyCode === RIGHT_ARROW && keyIsDown){
		plane.vel.x += 18;
		ovni.vel.x += 10;
	}

	if(plane.vel.x <= -18){
		plane.vel.x = -18;
	}

	if(plane.vel.x >= 18){
		plane.vel.x = 18;
	}

	if(ovni.vel.x <= -10){
		ovni.vel.x = -10;
	}

	if(ovni.vel.x >= 10){
		ovni.vel.x = 10;
	}
}

function mousePressed(){
		bullet = new bullets.Sprite(plane.x, plane.y -50);
		//bullet.direction = plane.direction;
		bullet.vel.y = -30;
		bullet.life = 30; 
}

function EvilOvni(){
	ovni.life = 100;
	ovni.vel.y = 10;

	bulletovni = new bullets.Sprite(ovni.x, ovni.y +50);
	bulletovni.vel.y = 20;
	bulletovni.life = 40;
}