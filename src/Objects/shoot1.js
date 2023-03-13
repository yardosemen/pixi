import { WIDTH, HEIGHT } from "../constants";
import app from "../initApp";
import sprite from "./sprite";
import { randomIntFromInterval } from "./../service/numbers";

export const spriteShoot1 = PIXI.Sprite.from("./img/shoot1.png");
spriteShoot1.anchor.set(0.5);
spriteShoot1.x = app.screen.width / 2;
spriteShoot1.y = app.screen.height / 4;

export const animateSpriteShoot = () => {
	// const spriteWidth = spriteShoot1.width * spriteShoot1.scale.x;
	const newX = (app.screen.width * randomIntFromInterval(6, 8)) / 10;
	const newY = (app.screen.height * randomIntFromInterval(1, 3)) / 10;

	TweenMax.to(spriteShoot1, 1, { x: newX, y: newY });
};
sprite.on("click", animateSpriteShoot);
