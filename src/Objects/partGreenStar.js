const spriteLeftSideGreen = PIXI.Sprite.from("./img/leftSideGreen.png");
const spriteRightSideGreen = PIXI.Sprite.from("./img/rightSideGreen.png");
spriteLeftSideGreen.anchor.set(0.5);
spriteRightSideGreen.anchor.set(0.5);
spriteLeftSideGreen.x = 150;
spriteLeftSideGreen.y = 150;
spriteRightSideGreen.x = 300;
spriteRightSideGreen.y = 150;
spriteLeftSideGreen.rotation += 0.3;
spriteRightSideGreen.rotation -= 0.5;

export const onSplitStar = (stage, onAnimationEnd) => {
	let x = spriteLeftSideGreen.x;
	let y = spriteLeftSideGreen.y;
	let x1 = spriteRightSideGreen.x;
	let y1 = spriteRightSideGreen.y;

	function animateGreenStar() {
		x -= 1;
		y -= 1;
		x1 += 1;
		y1 -= 1;
		spriteRightSideGreen.x = x1;
		spriteRightSideGreen.y = y1;

		spriteLeftSideGreen.x = x;
		spriteLeftSideGreen.y = y;

		if (
			spriteRightSideGreen.x >= 200 &&
			spriteRightSideGreen.y <= 145 &&
			spriteLeftSideGreen.x <= 200 &&
			spriteLeftSideGreen.y <= 145
		) {
			onAnimationEnd(spriteLeftSideGreen, spriteRightSideGreen);

			return;
		}
		requestAnimationFrame(animateGreenStar);
	}

	stage.addChild(spriteLeftSideGreen, spriteRightSideGreen);

	animateGreenStar();
};

export default { spriteRightSideGreen, spriteLeftSideGreen, onSplitStar };
