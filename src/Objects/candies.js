const spriteCandy1 = PIXI.Sprite.from("./img/candy1.png");
const spriteCandy2 = PIXI.Sprite.from("./img/candy2.png");
const spriteCandy3 = PIXI.Sprite.from("./img/candy3.png");
spriteCandy1.anchor.set(0.5);
spriteCandy1.x = 200;
spriteCandy1.y = 150;
spriteCandy1.animationSpeed = 2 / 10;

spriteCandy2.anchor.set(0.5);
spriteCandy2.x = 200;
spriteCandy2.y = 150;
spriteCandy2.animationSpeed = 2 / 10;

spriteCandy3.anchor.set(0.5);
spriteCandy3.x = 200;
spriteCandy3.y = 150;
spriteCandy3.animationSpeed = 2 / 10;

let x = spriteCandy1.x;
let y = spriteCandy1.y;
let x1 = spriteCandy2.x;
let y1 = spriteCandy2.y;
let x2 = spriteCandy3.x;
let y2 = spriteCandy3.y;

function animateCandyDown() {
	x = 200;
	y += 1;
	x1 = 200;
	y1 += 1;
	x2 = 200;
	y2 += 1;
	spriteCandy1.x = x;
	spriteCandy1.y = y;

	spriteCandy2.x = x;
	spriteCandy2.y = y;

	spriteCandy3.x = x;
	spriteCandy3.y = y;

	if (
		spriteCandy1.x == 290 &&
		spriteCandy1.y >= 400 &&
		spriteCandy2.x == 290 &&
		spriteCandy2.y >= 400 &&
		spriteCandy3.x == 290 &&
		spriteCandy3.y >= 400
	) {
		return;
	}
	requestAnimationFrame(animateCandyDown);
}

const spriteCandies = [spriteCandy1, spriteCandy2, spriteCandy3];

function CandyAnim(stage, { onAnimationEnd, onAnimationNext }) {
	stage.addChild(...spriteCandies);
	animateCandyDown();
	setTimeout(() => {
		stage.removeChild(...spriteCandies);
		onAnimationNext();
		setTimeout(() => {
			onAnimationEnd();
		}, 2000);
	}, 4000);
}

export default { spriteCandies, CandyAnim };
