import { WIDTH, HEIGHT } from "../constants";

const spriteGap = PIXI.Sprite.from("./img/gap.png");
spriteGap.anchor.set(0.5);
spriteGap.x = WIDTH / 2;
spriteGap.y = HEIGHT / 4;

export const onSpriteGapAnimation = (stage) => {
	stage.addChild(spriteGap);
	setTimeout(() => {
		stage.removeChild(spriteGap);
	}, 200);
};

export default { spriteGap, onSpriteGapAnimation };
