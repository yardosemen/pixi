import { WIDTH, HEIGHT } from "../constants";

const spriteBackgroundNavBar = PIXI.Sprite.from("./img/backgroundNavBar.png");
spriteBackgroundNavBar.anchor.set(0.5);
spriteBackgroundNavBar.scale.set(1.25);
spriteBackgroundNavBar.x = WIDTH / 2;
spriteBackgroundNavBar.y = HEIGHT / 1.07;

export default spriteBackgroundNavBar;
