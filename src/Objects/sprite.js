import { WIDTH, HEIGHT } from "../constants";

const sprite = PIXI.Sprite.from("./img/GreenStar.png");
sprite.anchor.set(0.5);
sprite.x = WIDTH / 2;
sprite.y = HEIGHT / 4;

export default sprite;
