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
);

sprite.interactive = true;

sprite.on("pointerover", onPointerOver.bind(null, app.stage));

sprite.on("click", handleClick);

function handleClick() {
	// Create a new sprite when the original sprite is clicked
	onSpriteGapAnimation(app.stage);
}
let clicks = 0;
sprite.on("click", () => {
	clicks++;
	spriteInsideStatusBar.scale.x -= 0.2;

	if (clicks === 5) {
		// remove sprite
		app.stage.removeChild(sprite);
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
});

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
