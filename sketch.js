var hydra = new Hydra({
  canvas: document.getElementById("myCanvas")
})
voronoi(20, 0.01, 1.1)
	
.kaleid(4)
	.colorama(2.83,0.91,0.39)
	.rotate(0, 0.1)
    .modulate(o0, () => mouse.y * 0.0003)
	.scale(1.01)
  	.out(o0)

let texts = [];
let text_size = 65;
let hc, pg;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  textSize(text_size);
  textAlign(CENTER, CENTER);
  fill(150, 100, 200);
  stroke(0);
  strokeWeight(2);
  
  hc = select("#myCanvas");
  hc.hide();
  pg = createGraphics(width, height);
}

function draw() {
  // Display Hydra visual in the background
  image(hc, 0, 0, width, height);
  
  // Display and move all text elements
  for (let i = 0; i < texts.length; i++) {
    texts[i].y -= 1; // Move the text element downwards
    drawText(texts[i].content, texts[i].x, texts[i].y); // Display text
  }
}

function drawText(content, x, y) {
  // Function to draw text
  text(content, x, y);
}

function mouseMoved() {
  // Add a new text element when the mouse moves
  texts.push({ content: 'Eres tanto que te siento sin verte', y: mouseY, x: mouseX });
}

function mousePressed() {
  // Clear all text elements when the mouse is pressed
  texts = [];
}