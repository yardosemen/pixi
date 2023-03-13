import app from "../initApp";
import { spriteRope } from "./rope";
import gap from "./gap";
import spriteCandies, { CandyAnim, animateCandyDown } from "./candies";
import { onSplitStar } from "./partGreenStar";
export const spriteInsideStatusBar = PIXI.Sprite.from(
	"./img/insideStatusBar.png",
);
spriteInsideStatusBar.scale.set(1);
spriteInsideStatusBar.interactive = true;
spriteInsideStatusBar.x = 142;
spriteInsideStatusBar.y = 343;

export const onPointerOver = (stage) => {
	app.stage.addChild(gap.spriteGap);
	setTimeout(() => {
		app.stage.removeChild(gap.spriteGap);
	}, 100);
	spriteInsideStatusBar.scale.x -= 0.2;
	if (spriteInsideStatusBar.scale.x < 0) {
		app.stage.removeChild(spriteInsideStatusBar);
		onSplitStar(stage);
		CandyAnim(stage, onAnimationEnd);
		app.stage.removeChild(spriteRope);
	}
};
