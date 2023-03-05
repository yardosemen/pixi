var pulseAnimation = new PIXI.AnimatedSprite([
	PIXI.Texture.from("./img/cursor_pulse.png"),
]);

// Set the animation properties
pulseAnimation.animationSpeed = 0.01;
pulseAnimation.anchor.set(0.5);
pulseAnimation.x = spriteCursor.x;
pulseAnimation.y = spriteCursor.y;

// Start the animation
pulseAnimation.play();
