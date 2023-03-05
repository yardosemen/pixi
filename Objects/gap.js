const spriteGap = PIXI.Sprite.from("./img/gap.png");
spriteGap.anchor.set(0.5);
spriteGap.x = app.screen.width / 2;
spriteGap.y = app.screen.height / 4;

function onSpriteGapAnimation(stage) {
	stage.addChild(spriteGap);
	setTimeout(() => {
		stage.removeChild(spriteGap);
	}, 200);
}
