const createSprite = (texture) => {
	const sprite = new PIXI.Sprite(texture);
	sprite.anchor.set(0.5);
	sprite.scale.set(1);
	sprite.position.set(375, 20);
	return sprite;
};

const spriteTextures = [
	"./img/count0.png",
	"./img/candyCount1.png",
	"./img/candyCount2.png",
	"./img/candyCount3.png",
	"./img/candyCount4.png",
	"./img/candyCount5.png",
	"./img/candyCount6.png",
	"./img/candyCount7.png",
	"./img/candyCount8.png",
	"./img/candyCount9.png",
];

const spriteCandyNumbers = spriteTextures.map((texture) =>
	createSprite(PIXI.Texture.from(texture)),
);

export const changeCandyCount = (stage) => {
	const prevSprite = spriteCandyNumbers.shift();
	stage.removeChild(prevSprite);

	const newSprite = spriteCandyNumbers[0];
	stage.addChild(newSprite);

	gsap.to(newSprite, {
		duration: 1,
		x: 375,
		y: 20,
	});
};
