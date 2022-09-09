let frames = 12;
let ancho = 800;
let largo = 800;
let bg;
let x1 = 0;
let x2;
let scrollSpeed = 2;
let posX;
let posY;
let plane;
let ovni;
let warplane;
let warplane2;
let warplane3;
let heart;
let bullets;
let bulletovni;
let lives = 3;

function preload(){
	bg = loadImage("./assets/background.jpg");

	plane = new Sprite(400,650,20,20);
	plane.addImg("./assets/theplane.png");

	ovni = new Sprite(400,50,20,20);
	ovni.addImg("./enemies/ovni.png");

	warplane = new Sprite(340,50,20,20);
	warplane.addImg("./enemies/warplane.png");

	warplane2 = new Sprite(370,50,20,20);
	warplane2.addImg("./enemies/warplane2.png");

	warplane3 = new Sprite(430,50,20,20);
	warplane3.addImg("./enemies/warplane3.png");

	bullets = new Group();
	bullets.addImg("./assets/bullet.png");

	rockets = new Group();
	rockets.addImg("./assets/rocket.png");

	//heart = loadImage("./assets/heart.png");
}

function setup() {
	frameRate(frames);
	let canvas = createCanvas(ancho, largo);
	//canvas.parent("canvas-content")
	
	Enemies();
	setInterval(EnemiesBullets, 1500);
	setInterval(Livess, 50);

	x2 = width;
	/*image(heart, 0, 750);
	image(heart, 45, 750);
	image(heart, 90, 750);*/

}

function draw() {

	image(bg,x1,0,ancho,largo);
	image(bg,x2,0,ancho,largo);

    x1 -= scrollSpeed;
	x2 -= scrollSpeed;

	if (x1 < -width){
		x1 = width;
	}
	if (x2 < -width){
		x2 = width;
	}

	strokeWeight(3);
	noFill();
	square(0,0,800);

	fill(0);
	textSize(30);
	text("Vidas: "+lives, 10 ,780);

	drawSprites();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		plane.vel.x -= 18;
		ovni.vel.x -= 10;
	}
	if(keyCode === RIGHT_ARROW){
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

function Enemies(){
	ovni.life = 100;
	ovni.vel.y = 10;

	warplane.life = 100;
	warplane.vel.y = 12;

	warplane2.life = 100;
	warplane2.vel.y = 15;

	warplane3.life = 100;
	warplane3.vel.y = 18;

}

function EnemiesBullets(){
	bulletovni = new bullets.Sprite(ovni.x, ovni.y +50);
	bulletovni.vel.y = 20;
	bulletovni.life = 40;

	bulletwarplane = new bullets.Sprite(warplane.x, warplane.y +50);
	bulletwarplane.vel.y = 20;
	bulletwarplane.life = 40;

	bulletwarplane2 = new bullets.Sprite(warplane2.x, warplane2.y +50);
	bulletwarplane2.vel.y = 20;
	bulletwarplane2.life = 40;

	bulletwarplane3 = new rockets.Sprite(warplane3.x-35, warplane3.y +50);
	bulle2twarplane3 = new rockets.Sprite(warplane3.x+35, warplane3.y +50);
	bulletwarplane3.vel.y = 20;
	bulle2twarplane3.vel.y = 20;
	bulletwarplane3.life = 40;
	bulle2twarplane3.life = 40;
}

function Livess(){	
	plane.overlap(bulletovni, colision);
		function colision(plane, bulletovni) {
			bulletovni.remove();
			lives--;
		}
}