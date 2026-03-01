// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Tree } from "./actors/Tree.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        const r1 = new Rectangle(20, 20, 50, 50);
        const r2 = new Rectangle(100, 100, 60, 60);
        const r3 = new Rectangle(200, 150, 30, 30);
        this.actors.push(r1, r2, r3);
        this.actors.push(new Circle(50, 200, 40), new Circle(150, 250, 30), new Circle(250, 300, 20));
        this.actors.push(new Tree(400, 500), new Tree(500, 80), new Tree(600, 450, 100));
    }
    update(deltaTime) {
        this.actors.forEach(actor => actor.update(deltaTime));
    }
    render(ctx) {
        this.actors.forEach(actor => actor.render(ctx));
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
