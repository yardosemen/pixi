import app from "./initApp";
import spriteArrowLeft from "./Objects/arrowLeft";
import spriteArrowRight from "./Objects/arrowRight";
import spriteBackgroundNavBar from "./Objects/backgroundNavBar";
import { spriteCandies, CandyAnim } from "./Objects/candies";
import spriteCandy from "./Objects/candy";
import spriteCat from "./Objects/cat";
import characterCat from "./Objects/characterCat";
import spriteCursor from "./Objects/cursor";
import { spriteGap, onSpriteGapAnimation } from "./Objects/gap";
import {
	spriteInsideStatusBar,
	onPointerOver,
} from "./Objects/insideStatusBar";
import spriteLevel1 from "./Objects/level1";
import spriteNavBar from "./Objects/navBar";
import {
	spriteRightSideGreen,
	spriteLeftSideGreen,
	onSplitStar,
} from "./Objects/partGreenStar";
import spritePlaceForLevel from "./Objects/PlaceForLevel";
import pulseAnimationCandy from "./Objects/pulseCandy";
import pulseCharacterCat from "./Objects/pulseCharacterCat";
import pulseAnimation from "./Objects/pulseCursor";
import spriteRope from "./Objects/rope";
import sprite from "./Objects/sprite";
import spriteStatusBar from "./Objects/statusBar";
import spriteCandyCount from "./Objects/candyCount";
import spriteCandyNumber from "./Objects/candyNumber";

// Add the sprite to the PIXI stage
app.stage.addChild(
	spriteRope,
	sprite,
	spriteCursor,
	spriteCandy,
	spriteStatusBar,
	spriteInsideStatusBar,
	spriteBackgroundNavBar,
	spriteNavBar,
	spriteArrowRight,
	spriteArrowLeft,
	spritePlaceForLevel,
	spriteLevel1,
	spriteCandyCount,
	spriteCandyNumber,
);

// sprite.x = 0;
// sprite.y = 0;

// // create the animation
// const destination = { x: 200, y: 350 }; // the destination point
// const duration = 1000; // the duration of the animation in milliseconds

// // create a tween to animate the sprite
// const tween = PIXI.tweenManager.createTween(sprite);

// // set the destination position of the sprite
// tween.to(destination, duration);

// // start the animation
// tween.start();

sprite.interactive = true;

// if (cheker === true) {
// } else if (cheker === false) {
// 	sprite.on("click", handleClick);
// }

// sprite.on("click", handleClick);
pulseCharacterCat(app.stage);
let clicks = 0;
function handleClick() {
	onSpriteGapAnimation(app.stage);
	clicks++;
	spriteInsideStatusBar.scale.x -= 0.2;

	if (clicks === 5) {
		// remove sprite
		app.stage.removeChild(sprite);
		app.stage.removeChild(spriteRope);
		onSplitStar(app.stage, (spriteLeftSideGreen, spriteRightSideGreen) => {
			app.stage.removeChild(spriteLeftSideGreen, spriteRightSideGreen);
		});

		CandyAnim(app.stage, {
			onAnimationNext: () => {
				app.stage.addChild(characterCat);
			},
			onAnimationEnd: () => {
				app.stage.removeChild(characterCat);
			},
		});
	}
}
sprite.on("pointerover", handleClick);
sprite.on("click", handleClick);

// Create the pulse animation
const pulse = gsap
	.timeline()
	.to(sprite.scale, { x: 1.2, y: 1.2, duration: 0.2, ease: "power2.out" })
	.to(sprite.scale, { x: 1, y: 1, duration: 0.2, ease: "power2.in" });

// Add an event listener to the sprite
sprite.interactive = true;
sprite.on("click", () => {
	// Start the pulse animation
	pulse.restart();
});

// Add the animated sprite to the stage
app.stage.addChild(pulseAnimation);

// Use the PIXI.Ticker to update the pulse animation
app.ticker.add((delta) => {
	// Scale the sprite based on the sine wave of the elapsed time
	spriteCursor.scale.set(1 + Math.sin(performance.now() * 0.01) * 0.1);
});

// animation candy pulse

// Add the animated sprite to the stage
app.stage.addChild(pulseAnimationCandy);

// Use the PIXI.Ticker to update the pulse animation
app.ticker.add((delta) => {
	// Scale the sprite based on the sine wave of the elapsed time
	spriteCandy.scale.set(1 + Math.sin(performance.now() * 0.01) * 0.1);
});

// Start the PIXI app
app.start();
