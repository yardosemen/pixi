var characterCat = null;

PIXI.Assets.load([
	"./assets/spritesheet.json",
	"./assets/spritesheet.png",
]).then(() => {
	const animations = PIXI.Assets.cache.get("./assets/spritesheet.json").data
		.animations;
	const catEats = [
		"img/eatCat.1.png",
		"img/eatCat.2.png",
		"img/eatCat.3.png",
		"img/eatCat.4.png",
		"img/eatCat.5.png",
		"img/eatCat.6.png",
		"img/eatCat.7.png",
		"img/eatCat.8.png",
		"img/eatCat.9.png",
		"img/eatCat.10.png",
		"img/eatCat.11.png",
		"img/eatCat.12.png",
	];
	characterCat = PIXI.AnimatedSprite.fromFrames(catEats);

	// configure + start animation:
	characterCat.animationSpeed = 1 / 10; // 6 fps
	characterCat.x = app.screen.width / 2;
	characterCat.y = app.screen.height / 1.4;
	characterCat.anchor.set(0.5);
	characterCat.play();
});
