import onSpriteGapAnimation from "./Object/gap.js";

export const spriteInsideStatusBar = PIXI.Sprite.from(
	"./img/insideStatusBar.png",
);
spriteInsideStatusBar.scale.set(1);
spriteInsideStatusBar.interactive = true;
spriteInsideStatusBar.x = 142;
spriteInsideStatusBar.y = 343;

export const onPointerOver = (stage) => {
	onSpriteGapAnimation(stage);
	spriteInsideStatusBar.scale.x -= 0.2;
	if (spriteInsideStatusBar.scale.x < 0) {
		stage.removeChild(spriteInsideStatusBar);
	}
};
