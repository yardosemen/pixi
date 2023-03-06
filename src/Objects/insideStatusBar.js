import spriteRope from "./rope";
import gap from "./gap";
import { CandyAnim } from "./candies";
import { onSplitStar } from "./partGreenStar";
export const spriteInsideStatusBar = PIXI.Sprite.from(
	"./img/insideStatusBar.png",
);
spriteInsideStatusBar.scale.set(1);
spriteInsideStatusBar.interactive = true;
spriteInsideStatusBar.x = 142;
spriteInsideStatusBar.y = 343;

export const onPointerOver = (stage) => {
	stage.addChild(gap.spriteGap);
	setTimeout(() => {
		stage.removeChild(gap.spriteGap);
	}, 100);
	spriteInsideStatusBar.scale.x -= 0.2;
	if (spriteInsideStatusBar.scale.x < 0) {
		stage.removeChild(spriteInsideStatusBar);
		onSplitStar(stage);
		CandyAnim(stage, onAnimationEnd);
		stage.removeChild(spriteRope);
	}
};
