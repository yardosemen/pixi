import { WIDTH, HEIGHT } from "./constants.js";

// Create a PIXI application
const app = new PIXI.Application({
	width: WIDTH,
	height: HEIGHT,
	backgroundColor: 0x1099bb,
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.left = `${WIDTH / 2 - app.renderer.view.width / 2}px`;
app.renderer.view.style.top = `${HEIGHT / 2 - app.renderer.view.height / 2}px`;
// Add the PIXI canvas to the HTML document
document.body.appendChild(app.view);
debugger;
export default app;
