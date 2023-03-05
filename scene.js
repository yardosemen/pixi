// Create a PIXI application
var app = new PIXI.Application({
	width: 410,
	height: 680,
	backgroundColor: 0x1099bb,
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.left = `${
	window.innerWidth / 2 - app.renderer.view.width / 2
}px`;
app.renderer.view.style.top = `${
	window.innerHeight / 2 - app.renderer.view.height / 2
}px`;
// Add the PIXI canvas to the HTML document
document.body.appendChild(app.view);
