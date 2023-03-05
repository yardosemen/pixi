import { WIDTH, HEIGHT } from "../constants";

const spriteCursor = PIXI.Sprite.from("./img/cursor.png");
spriteCursor.anchor.set(0.5);
spriteCursor.x = WIDTH / 1.6;
spriteCursor.y = HEIGHT / 2.5;

export default spriteCursor;
