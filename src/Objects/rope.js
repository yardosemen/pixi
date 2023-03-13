import sprite from "./sprite";
import app from "../initApp";

export const spriteRope = PIXI.Sprite.from("./img/rope.png");
spriteRope.anchor.set(0.5);
spriteRope.x = 205;
spriteRope.y = 20;

export const animatedStartSpriteRope = () => {
	spriteRope.x = app.renderer.width / 2; // установка позиции по оси X в середину канваса
	spriteRope.y = -spriteRope.height;
	sprite.x = app.renderer.width / 2; // установка позиции по оси X в середину канваса
	sprite.y = -sprite.height;
	function animate() {
		if (
			sprite.y < app.renderer.height / 4 &&
			spriteRope.y < app.renderer.height / 4
		) {
			sprite.y += 2;
			spriteRope.y += 2; // перемещение спрайта вниз
		}
		requestAnimationFrame(animate);
	}
	app.stage.addChild(spriteRope, sprite); // добавление спрайта на сцену
	animate();
};
