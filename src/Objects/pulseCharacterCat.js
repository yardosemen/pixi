import { WIDTH, HEIGHT } from "../constants";

let character = null;
export const pulseCharacterCat = (stage) => {
	PIXI.Assets.load(["./spritesheetCat.json", "./spritesheet.png"]).then(() => {
		const animations = PIXI.Assets.cache.get("./spritesheetCat.json").data
			.animations;
		const capguyFrames = ["img/cat.1.png", "img/cat.2.png"];
		const character = PIXI.AnimatedSprite.fromFrames(capguyFrames);

		// configure + start animation:
		character.animationSpeed = 1 / 10; // 6 fps
		character.x = WIDTH / 2;
		character.y = HEIGHT / 1.4;
		character.anchor.set(0.5);
		character.play();
		stage.addChild(character);
	});
};

export const removepulseCharacterCat = (stage) => {
	stage.removeChild(character);
};
