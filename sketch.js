let frames = 12;
let ancho = 800;
let largo = 800;
let bg;
let y1 = 0;
let y2;
let scrollSpeed = 5;
let posX;
let posY;
let plane;
let ovni;
let warplane;
let warplane2;
let warplane3;
let heart;
let bullets;
let bullets1;
let bullets2;
let bulletovni;
let lives = 3;
let start = false;
let lifeimg;
let livesovni = 3;
let liveswarplane = 3;
let liveswarplane2 = 3;
let liveswarplane3 = 4;
let explotiongif;
let fondo;
let playing = false;

function preload() {
	bg = loadImage("./assets/background.jpg");

	plane = new Group();
	plane.addImg("./assets/theplane.png");

	ovni = new Sprite(random(250, 360), random(10, 70), 20, 20);
	ovni.addImg("./enemies/ovni.png");

	warplane = new Sprite(random(90, 220), random(10, 70), 20, 20);
	warplane.addImg("./enemies/warplane.png");

	warplane2 = new Sprite(random(430, 650), random(10, 70), 20, 20);
	warplane2.addImg("./enemies/warplane2.png");

	warplane3 = new Sprite(random(690, 770), random(10, 70), 20, 20);
	warplane3.addImg("./enemies/warplane3.png");

	bullets = new Group();
	bullets.addImg("./assets/bullet.png");

	bullets2 = new Group();
	bullets2.addImg("./assets/bullet2.png");

	lifeimg = loadImage("./assets/heart.png");

	bullets1 = new Group();
	bullets1.addImg("./assets/bullet1.png");

	explotiongif = loadImage("./assets/explotiongif.gif");

	heart = loadImage("./assets/heart.png");	

	fondo = loadImage("./assets/fondo.png")
}
function setup() {
	frameRate(frames);
	let canvas = createCanvas(ancho, largo);
	//canvas.parent("canvas-content")

	mainPlane();
	Enemies();
	setInterval(EnemiesMoves, 2000);
	setInterval(EnemiesBullets, 1500);
	setInterval(Livess, 50);

	y2 = width;
	

}

function menu() {
	image(fondo, 0, 0, ancho, largo);
	button = createButton('Play');
	button.position(61, 555);
	button.mousePressed(() => playing=true);
}

function game() {
	/*ovni.remove();
	warplane.remove();
	warplane2.remove();
	warplane3.remove();*/

	/*ovni = new Sprite(random(250, 360), random(10, 70), 20, 20);
	ovni.addImg("./enemies/ovni.png");

	warplane = new Sprite(random(90, 220), random(10, 70), 20, 20);
	warplane.addImg("./enemies/warplane.png");

	warplane2 = new Sprite(random(430, 650), random(10, 70), 20, 20);
	warplane2.addImg("./enemies/warplane2.png");

	warplane3 = new Sprite(random(690, 770), random(10, 70), 20, 20);
	warplane3.addImg("./enemies/warplane3.png");*/

	image(bg, 0, y1, ancho, largo);
	image(bg, 0, y2, ancho, largo);

	y1 -= scrollSpeed;
	y2 -= scrollSpeed;

	if (y1 < -width) {
		y1 = width;
	}
	if (y2 < -width) {
		y2 = width;
	}

	Limits();
	EnemiesLives();
	ifEnemiesLivesIs0();

	strokeWeight(3);
	noFill();
	square(0, 0, 800);

	fill(230);
	textSize(30);
	text("Vidas    : " + lives, 10, 780);
	text("Vidas ovni   : " + livesovni, 10, 700);
	text("Vidas warplane   : " + liveswarplane, 10, 600);
	text("Vidas warplane 2  : " + liveswarplane2, 10, 500);
	text("Vidas warplane 3  : " + liveswarplane3, 10, 400);
	image(lifeimg, 82, 753);
}

function draw() {
	if (playing) {
		game();
	}
	else{
		menu();
	}
	drawSprites();
}

//función para generar el avión principal
function mainPlane(){
	mainplane = new plane.Sprite(400, 650, 20, 20);
	
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		mainplane.vel.x -= 18;
		ovni.vel.x -= 10;
	}
	if (keyCode === RIGHT_ARROW) {
		mainplane.vel.x += 18;
		ovni.vel.x += 10;
	}

	if (mainplane.vel.x <= -18) {
		mainplane.vel.x = -18;
	}

	if (mainplane.vel.x >= 18) {
		mainplane.vel.x = 18;
	}

	if (ovni.vel.x <= -10) {
		ovni.vel.x = -10;
	}

	if (ovni.vel.x >= 10) {
		ovni.vel.x = 10;
	}
}

function Limits() {
	//limites del canvas
	if (plane.x >= 761) {
		plane.x = 761;
	} else if (plane.x <= 30) {
		plane.x = 30;
	}
	//regenera los enemigos
	if (ovni.y >= 800) {
		ovni.y = -10;
		ovni.x = random(30, 660);
	}

	if (warplane.y >= 800) {
		warplane.y = -10;
		warplane.x = random(30, 660);
	}
	if (warplane2.y >= 800) {
		warplane2.y = -10;
		warplane2.x = random(30, 660);
	}

	if (warplane3.y >= 800) {
		warplane3.y = -10;
		warplane3.x = random(30, 660);
	}

}

function mousePressed() {
	//toque mouse dispare
	bulletplane = new bullets.Sprite(mainplane.x, mainplane.y - 50);
	//bullet.direction = plane.direction;
	bulletplane.vel.y = -30;
	bulletplane.life = 30;
}

function Enemies() {
	//velocidad de los aviones
	ovni.vel.y = 10;

	warplane.vel.y = 12;

	warplane2.vel.y = 15;

	warplane3.vel.y = 18;
}

function EnemiesBullets() {
	bulletovni = new bullets1.Sprite(ovni.x, ovni.y + 50);
	bulletovni.vel.y = 20;
	bulletovni.life = 40;

	bulletwarplane = new bullets1.Sprite(warplane.x, warplane.y + 50);
	bulletwarplane.vel.y = 20;
	bulletwarplane.life = 40;

	bulletwarplane2 = new bullets1.Sprite(warplane2.x, warplane2.y + 50);
	bulletwarplane2.vel.y = 20;
	bulletwarplane2.life = 40;

	bullet1warplane3 = new bullets2.Sprite(warplane3.x - 45, warplane3.y + 50);
	bullet2warplane3 = new bullets2.Sprite(warplane3.x + 35, warplane3.y + 50);
	bullet1warplane3.vel.y = 20;
	bullet2warplane3.vel.y = 20;
	bullet1warplane3.life = 40;
	bullet2warplane3.life = 40;
}

//función para determinar el movimiento de los enemigos
function EnemiesMoves(){
	warplane.vel.x += random(10,30);
	warplane.vel.x -= random(10,30);
}

/*función para bajar las vidas del avión principal 
si colisiona con una bala enemiga*/
function Livess() {
	plane.overlap(bulletovni, colision);
	function colision(plane, bulletovni) {
		bulletovni.remove();
		lives--;
	}

	plane.overlap(bulletwarplane, colision2);
	function colision2(plane, bulletawarplane) {
		bulletwarplane.remove();
		lives--;
	}

	plane.overlap(bulletwarplane2, colision3);
	function colision3(plane, bulletwarplane2) {
		bulletwarplane2.remove();
		lives--;
	}

	plane.overlap(bullet1warplane3, colision4);
	function colision4(plane, bullet1warplane3) {
		bullet1warplane3.remove();
		lives--;
	}

	plane.overlap(bullet2warplane3, colision4);
	function colision4(plane, bullet2warplane3) {
		bullet2warplane3.remove();
		lives--;
	}
}

/*función para bajar las vidas de los enemigos 
si una bala del avión principal colisiona con el enemigo*/
function EnemiesLives() {
	ovni.overlap(bulletplane, colision01);
	function colision01(ovni, bulletplane) {
		livesovni--;
		bulletplane.remove();
	}

	warplane.overlap(bulletplane, colision02);
	function colision02(warplane, bulletplane) {
		liveswarplane--;
		bulletplane.remove();
	}

	warplane2.overlap(bulletplane, colision03);
	function colision03(warplane2, bulletplane) {
		liveswarplane2--;
		bulletplane.remove();
	}

	warplane3.overlap(bulletplane, colision04);
	function colision04(warplane3, bulletplane) {
		liveswarplane3--;
		bulletplane.remove();
	}
}

/*función para que si la vida de los enemigos es 0, desaparezca 
junto a un sprite de explosión y se regenere uno nuevo*/
function ifEnemiesLivesIs0(){
	if (livesovni <= 0) {
		explosionovni = image(explotiongif, ovni.x-50, ovni.y-50);
		//explotiongif.size(40, 40);
		//explotiongif.loadPixels();
		ovni.remove();
		bulletovni.remove();
	}

	if (liveswarplane <= 0) {
		image(explotiongif, warplane.x-50, warplane.y-50);
		//explotiongif.size(40, 40);
		//explotiongif.loadPixels();
		warplane.remove();
		bulletwarplane.remove();
	}

	if (liveswarplane2 <= 0) {
		image(explotiongif, warplane2.x-50, warplane2.y-50);
		//explotiongif.size(40, 40);
		//explotiongif.loadPixels();
		warplane2.remove();
		bulletwarplane2.remove();
	}

	if (liveswarplane3 <= 0) {
		image(explotiongif, warplane3.x-40, warplane3.y-40);
		//explotiongif.size(40, 40);
		//explotiongif.loadPixels();
		warplane3.remove();
		bullet1warplane3.remove();
		bullet2warplane3.remove();
	}
}