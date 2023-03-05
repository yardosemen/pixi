import { WIDTH, HEIGHT } from "../constants";

const spriteNavBar = PIXI.Sprite.from("./img/navbar.png");
spriteNavBar.anchor.set(0.5);
spriteNavBar.scale.set(1.3);
spriteNavBar.x = WIDTH / 2;
spriteNavBar.y = HEIGHT / 1.07;

export default spriteNavBar;
