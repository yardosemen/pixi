import spriteCandy from "./candy";

const pulseAnimationCandy = new PIXI.AnimatedSprite([
	PIXI.Texture.from("./img/candy_pulse.png"),
]);

// Set the animation properties
pulseAnimationCandy.animationSpeed = 0.01;
pulseAnimationCandy.anchor.set(0.5);
pulseAnimationCandy.x = spriteCandy.x;
pulseAnimationCandy.y = spriteCandy.y;

// Start the animation
pulseAnimationCandy.play();

export default pulseAnimationCandy;
