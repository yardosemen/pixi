var spriteInsideStatusBar = PIXI.Sprite.from("./img/insideStatusBar.png");
spriteInsideStatusBar.scale.set(1);
spriteInsideStatusBar.interactive = true;
spriteInsideStatusBar.x = 142;
spriteInsideStatusBar.y = 343;

function onPointerOver(stage) {
	spriteInsideStatusBar.scale.x -= 0.2;
	if (spriteInsideStatusBar.scale.x < 0) {
		stage.removeChild(spriteInsideStatusBar);
	}
}
