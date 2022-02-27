/*projekte*/
let proj1;
let proj2;
let proj3;
let proj4;
let proj5;
let proj6;
let proj7;
let proj8;
let proj9;
let proj10;
let proj11;
let proj12;
let proj14;
let mandalorian;
let startText;
let projMirror;
let mirror;

/*Scroll Fortschritt*/
let scrollProg = 0;

/*Wand Texturen*/
let wallTex1;

let boxSize1 = window.innerHeight/4
let boxSize2 = window.innerWidth / 4 - 50

/*Wall Cam distanz*/
let cwDist = window.innerHeight

//Wall Width
let wallW = window.innerWidth * 4

//floor PosY
let floorY = window.innerHeight/2 + 10


// roof PosY
let roofY = -window.innerHeight + 100


//Gerade Strecke auf jeder Achse
let strTrack = (window.innerWidth * 4) - (cwDist * 2);
let mainTrack = strTrack / 2

/*camera Startpoint*/
let camX = -(window.innerWidth * 2) + cwDist;
let centerX = -(window.innerWidth * 2) + cwDist;

/*camera position 2. wall*/
let camZ = -mainTrack;
let centerZ = -(window.innerWidth * 2);

function preload() {
	proj1_tex = loadImage('assets/circleCeption.gif');
	proj2_tex = loadImage('assets/hole.png');
	proj3_tex = loadImage('assets/stair-1.png');
	proj4_tex = loadImage('assets/stair-2.png');
	proj5_tex = loadImage('assets/flow3r.png');
	proj6_tex = loadImage('assets/moon-clock.gif');
	proj7_tex = loadImage('assets/squareshot.gif');
	proj8_tex = loadImage('assets/spy-cam.gif');
	proj9_tex = loadImage('assets/wave1.png');
	proj10_tex = loadImage('assets/wave2.png');
	proj11_tex = loadImage('assets/wave3.png');
	proj12_tex = loadImage('assets/lava.gif');
	proj14_tex = loadImage('assets/3d-clock.gif');
	mandalorian = loadModel('assets/mandalorian-helmet.obj', true)
	wallTex1 = loadImage('assets/beton-2-4.jpg')
	wallTex2 = loadImage('assets/wallTex.jpg')
	wallTex3 = loadImage('assets/beton-1.jpg')
	wallTex4 = loadImage('assets/wallTex2.jpg')
	wallTex5 = loadImage('assets/mtex_med_15289.jpg')
}

function setup() 
{
	createCanvas(windowWidth, windowHeight, WEBGL);
	//Mirror
	mirror = createCapture(VIDEO)

	// /*Anleitung*/
	startText = createGraphics(400, 400)
	startText.noStroke();
	startText.fill(23)
	startText.textSize(80);
	startText.textFont('Helvetica Neue');
	startText.textAlign(CENTER, CENTER);
	startText.text('scroll >', 200, 200)

	/*---------Projekte werden in Klassen gesetzt----------*/

	// proj1 = new Frame(width, height, depth, x, y, z, texture);
	proj1 = new Frame(boxSize1 / 2, boxSize1 / 2, boxSize1 / 2, -width / 2, height / 4, -width * 2 + 100, proj1_tex);
	proj2 = new Frame(boxSize1, boxSize1, 20, wallW / 16, height/4, - (width * 2) + 110, proj2_tex);
	proj3 = new Frame(boxSize2, boxSize2, 20, width / 2 + width / 8, 0, - (width * 2) - 190, proj3_tex);
	proj4 = new Frame(boxSize2, boxSize2, 20, width - width / 8, 0, - (width * 2) - 190, proj4_tex);
	proj5 = new Frame(10, boxSize1, boxSize1, wallW / 2 - 100, height / 4, - width / 2, proj5_tex);
	proj6 = new Frame(20, width / 2 - 60, width / 2 - 60, wallW / 2 + 200, floorY - (height / 2) -10, width / 2, proj6_tex);
	proj7 = new Frame(1, width / 3 -100, width / 3, wallW / 2 - 120, height / 4 - height/20, wallW / 2 - width / 2, proj7_tex);
	proj8 = new Frame(width / 2 - width / 20, width / 2  - width / 20, 20, width + width / 4, 0, wallW / 2 + 780, proj8_tex);
	proj9 = new Frame(boxSize1, boxSize1, 20, -width - width / 2, height / 4, wallW / 2, proj9_tex);
	proj10 = new Frame(boxSize1, boxSize1, 20, -width - width / 4, height / 4, wallW / 2, proj10_tex);
	proj11 = new Frame(boxSize1, boxSize1, 20, -width, height / 4, wallW / 2, proj11_tex);
	proj12 = new Frame(height, height, 20, 0, 0, wallW / 2 + 280, proj12_tex);
	proj14 = new Frame(20, width / 4, width / 4, -width * 2 + 40, 0, 0, proj14_tex);

	//WallText
	proj13 = new Frame(400, 400, 2, -width * 2 + width / 2, floorY -110, - (width * 2) + 100, startText);

	//Mirror
	projMirror = new Frame(5, width / 5, width / 7, -width * 2 + 40, 0, -width, mirror);


}

function draw()
{


/*--------------------Light Setting-----------------------*/

	/*Camera Light*/
	pointLight(120, 120, 120, centerX - 20, -250, centerZ + 250);
	pointLight(230, 230, 230, 0, - height * 3, 0);

	ambientLight(90);
	specularMaterial(200);
	shininess(20)


/*----------------Camera and Scene Settings-------------------*/
	background(0)
	orbitControl();
	camera(camX, 0, camZ, centerX, 0, centerZ, 0, 1, 0)
	// camera(0, 0, 1, 0, 0, 0, 0, 1, 0)

	translate(0, -height/10, 0)
	stroke(0)
	noStroke()


/*-------------------------Walls--------------------------*/
	/*wall 1*/
	push()
	translate(0, 0, - (width * 2) - 800)
	fill(10)
	texture(wallTex2)
	box(wallW, height * 3, 20)
	pop()

	/*floor*/
	push()
	translate(0, floorY, 0)
	ambientMaterial(230)
	// fill(213, 166, 175)
	texture(wallTex1)
	box(width * 6, 20, width * 6)
	pop()


	/*roof*/
	push()
	translate(0, roofY, 0)
	fill(255)
	// texture(wallTex1)
	box(width * 6, 20, width * 6)
	pop()


	/*wall 1.1*/
	push()
	texture(wallTex2)
	translate(-width * 2 + width / 2, - height/2, - (width * 2) - 300)
	box(width, height * 2, 800)
	pop()

	/*wall 1.2*/
	push()
	texture(wallTex3)
	translate(-width / 2, height/4, -width * 2)
	box(width - (width / 6), height/2, 20)
		/*Box vor wall*/
		translate(0, height / 3 - boxSize1 / 2, 100)
		fill(55)
		box(boxSize1 / 2, boxSize1, boxSize1 / 2)
	pop()


	/*wall 1.3*/
	push()
	texture(wallTex2)
	translate(wallW / 16, - height/2, - (width * 2) - 300)
	box(width/2, height * 2, 800)
	pop()


	/*wall 1.4*/
	push()
	texture(wallTex3)
	translate(width / 2 + width / 8, 0, - (width * 2) - 600)
	box(width / 4 - 30, height, 800)
	pop()


	/*wall 1.5*/
	push()
	texture(wallTex3)
	translate(width - width / 8, 0, - (width * 2) - 600)
	box(width / 4 - 30, height, 800)
	pop()


	/*wall 1.6*/
	push()
	texture(wallTex2)
	translate(wallW / 2 - width / 2, - height/2, - (width * 2) - 300)
	box(width, height * 2, 800)
	pop()



	/*wall 2*/
	push()
	translate(width * 2 + 800, 0, 0)
	box(20, height * 3, wallW)
	pop()


	/*wall 2.1*/
	push()
	texture(wallTex2)
	translate(wallW / 2, - height/2, - wallW / 2 + width / 2)
	box(20, height * 2, width)
	pop()


	/*wall 2.2.1*/
	push()
	texture(wallTex3)
	translate(wallW / 2 + 320, height / 2, - width / 2)
	box(800, height, width - 60)
	pop()


	/*wall 2.2.2*/
	push()
	texture(wallTex2)
	translate(wallW / 2 + 410, - height / 2, - width / 2)
	box(800, height * 2, width - 200)
	pop()


	/*wall 2.3*/
	push()
	texture(wallTex2)
	translate(wallW / 2 + 600, - height / 2, width / 2)
	box(800, height * 2, width)
	pop()


	/*wall 2.4.1*/
	push()
	fill(55)
	translate(wallW / 2 - 100, height / 4, wallW / 2 - width / 2)
	box(20, height / 2, width / 3)

		translate(0, height / 4 - 10, 0)
		fill(55)
		box(60, 20, width / 3)

	pop()


	/*wall 2.4.2*/
	push()
	texture(wallTex2)
	translate(wallW / 2 + 350, - height / 2, wallW / 2 - width / 2)
	box(800, height * 2, width)
	pop()


	// wall 3
	push()
	translate(0, 0, width * 2 + 810)
	box(wallW, height * 3, 20)
	pop()

	// wall 3.1
	push()
	texture(wallTex2)
	translate(wallW / 2 - width / 4, 0, wallW / 2 + 400)
	box(width / 2, height, 800)
	pop()

	// wall 3.2
	push()
	texture(wallTex2)
	translate(width + width / 4, 0, wallW / 2 + 800)
	box(width / 2, height * 2, 20)
	pop()


	// wall 3.3
	push()
	texture(wallTex2)
	translate(width - width / 4, 0, wallW / 2 + 400)
	box(width / 2, height, 800)
	pop()


	// wall 3.4
	push()
	texture(wallTex2)
	translate(0, 0, wallW / 2 + 300)
	box(width - 120, height, 20)
	pop()


	// wall 3.5
	push()
	texture(wallTex2)
	translate(- width - width / 4, 0, wallW / 2 + 400)
	box(width + width / 2, height, 800)
	pop()

	// // wall 4
	// push()
	// translate(-width * 2, 0, 0)
	// box(20, height, wallW)
	// pop()

	// wall 4.1
	push()
	translate(-width * 2, 0, 0)
	box(20, height, wallW)
	pop()

	// wall 4.2
	push()
	// texture(wallTex4)
	texture(wallTex5)
	translate(-width * 2 + 20, 0, width + width / 4)
	box(20, height, width / 2)

		texture(wallTex4)
		translate(100, floorY - (height / 8) -10, 0) //Formel um Objekte auf Boden zu stellen
		box(100, height / 4, 100)

	pop()

	/*project mando*/
	push()
	texture(wallTex2)
	translate(-width * 2 + 120, 0, width + width / 4)	
	noStroke()
	rotateX(PI)
	rotateY(frameCount * 0.005)
	specularMaterial(142, 136, 137)
	scale(0.7)
	model(mandalorian)
	pop()

		// wall 4.2
	push()
	// texture(wallTex4)
	texture(wallTex5)
	translate(-width * 2 + 20, 0, width + width / 4)
	box(20, height, width / 2)

		texture(wallTex4)
		translate(100, floorY - (height / 8) -10, 0) //Formel um Objekte auf Boden zu stellen
		box(100, height / 4, 100)

	pop()

	// wall 4.3
	push()
	texture(wallTex5)
	translate(-width * 2 + 20, 0, 0)
	box(20, height, width / 2)
	pop()

/*-------------------------Frames--------------------------*/

	push()
	stroke(0)
	proj1.display();
	pop()
	proj2.display();
	proj3.display();
	proj4.display();
	proj5.display();
	proj6.display();
	proj7.display();
	proj8.display();
	proj9.display();
	proj10.display();
	proj11.display();
	proj12.display();
	proj13.display();
	proj14.display();

	push()
	// rotateX(-PI/2)
	projMirror.display();
	pop()

}

/*Cam fährt bei scrolling */

function mouseWheel(event) {

	//event.delta vermindern
	let scrollB = event.delta
	scrollProg += scrollB;

	/*CamTurn XL*/
	if (centerZ <= -mainTrack) {
		// Cam bleibt auf gleichem Punkt stehen auf Z-axis
		camZ = -mainTrack;
		centerX += scrollB
			
		/*CamX 1 -> Cam fährt auf x-achse*/
		if (centerX >= -mainTrack && camZ == -mainTrack) {
			camX += scrollB
		}
	}

	/*CamTurn ZR*/
	if (centerX >= mainTrack ) {
		// Cam bleibt auf gleichem Punkt stehen X-axis
		camX = mainTrack;
		centerZ += scrollB
		
		/*CamZ 1 -> Cam fährt auf Z-achse*/
		if (centerZ >= -mainTrack && camX == mainTrack) {
			camZ += scrollB
		}
	}

	/*CamTurn XR*/
	if (centerZ >= mainTrack) {
		// Cam bleibt auf gleichem Punkt stehen Z-axis
		camZ = mainTrack;
		centerX -= scrollB
		
		/*CamX 2 -> Cam fährt auf X-achse*/
		if (centerX <= mainTrack && camZ == mainTrack) {
			camX -= scrollB
		}
	}

	/*CamTurn ZL*/
	if (centerX <= -mainTrack) {
		// Cam bleibt auf gleichem Punkt stehen X-axis
		camX = -mainTrack;
		centerZ -= scrollB
			
		/*CamZ 2 -> Cam fährt auf Z-achse*/
		if (centerZ <= mainTrack && camX == -mainTrack) {
			camZ -= scrollB
		}
	}

}






