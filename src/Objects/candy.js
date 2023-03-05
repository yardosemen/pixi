import { WIDTH, HEIGHT } from "../constants";

const spriteCandy = PIXI.Sprite.from("./img/candy.png");
spriteCandy.anchor.set(0.5);
spriteCandy.x = WIDTH / 1.4;
spriteCandy.y = HEIGHT / 1.7;

export default spriteCandy;
