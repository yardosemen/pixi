import { WIDTH, HEIGHT } from "../constants";

const spriteStatusBar = PIXI.Sprite.from("./img/statusBar.png");
spriteStatusBar.anchor.set(0.5);
spriteStatusBar.x = WIDTH / 2;
spriteStatusBar.y = HEIGHT / 1.95;

export default spriteStatusBar;
