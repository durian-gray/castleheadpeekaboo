let still, vid, w, h, counter;;

function preload() {
	still = loadImage('assets/peekaboostill.jpg');
	vid = createVideo('assets/peekaboo.mp4', vidLoad)
	vid.hide(); // hide the video
}

// This function is called when the video loads
function vidLoad() {
	vid.noLoop();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	updateRatio();
	counter=0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateRatio();
}

function updateRatio() {
  w=windowWidth;
  h=windowWidth/(16/9);
}

function draw() {
	image(vid,0,0,w,h);
	

	if(counter==0){
		textSize(32);		
		fill(0,100);
		noStroke();
		rect(100,100,w-100,100);
		fill(250);
		text('Click to play Peekaboo with Castlehead', 100, 100);
	} else{
	}
}

function mouseClicked() {
	vid.play();
	counter++;
}