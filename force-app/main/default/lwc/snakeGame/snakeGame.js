import { LightningElement, track } from "lwc";
import * as Util from "c/util";

import * as SNAKE from "./snake";

export default class SnakeGame extends LightningElement {
  score = 0;
  @track snake = [
    { x: 11, y: 11, style: "grid-row-start:11;grid-column-start:11" }
  ];
  food = { x: 1, y: 1, style: "grid-row-start:1;grid-column-start:1" };
  xSpeed = 0;
  ySpeed = 0;
  direction = "";
  renderComplete = false;
  handleKeyPress(e) {
    e.preventDefault();
    // console.log(e.keyCode);
    switch (e.keyCode) {
      case 37:
        // console.log("Left key is pressed.");
        if (this.direction !== "right") {
          this.xSpeed = -1;
          this.ySpeed = 0;
          this.direction = "left";
        }
        break;
      case 38:
        // console.log("Up key is pressed.");
        if (this.direction !== "down") {
          this.xSpeed = 0;
          this.ySpeed = -1;
          this.direction = "up";
        }
        break;
      case 39:
        // console.log("Right key is pressed.");
        if (this.direction !== "left") {
          this.xSpeed = 1;
          this.ySpeed = 0;
          this.direction = "right";
        }
        break;
      case 40:
        // console.log("Down key is pressed.");
        if (this.direction !== "up") {
          this.xSpeed = 0;
          this.ySpeed = 1;
          this.direction = "down";
        }
        break;
    }
  }

  //   touchFood() {
  //     const snakeHead = SNAKE.move(this.snake, this.xSpeed, this.ySpeed)[0];

  //     if (snakeHead.x === this.food.x && snakeHead.y === this.food.y) {
  //       return true;
  //     } else {
  //       return false;
  //     }

  //   }

  move() {
    setInterval(() => {
      if ((this.xSpeed !== 0) | (this.ySpeed !== 0)) {
        if (SNAKE.detectBody(this.snake, this.xSpeed, this.ySpeed) === true) {
          Util.showToast(
            "Game Over!",
            "Refresh page to restart",
            "error",
            this
          );
          throw new Error("die");
        }
      }
      if (SNAKE.detectFood(this.snake, this.xSpeed, this.ySpeed, this.food)) {
        this.snake = SNAKE.eatFood(this.snake, this.food);
        this.score = this.score + 1;
        this.food = SNAKE.randomFood(this.snake);
      } else {
        // console.log("move");
        this.snake = SNAKE.move(this.snake, this.xSpeed, this.ySpeed);
        //console.log(this.snake);
      }

      //   this.snake = SNAKE.move(this.snake, this.xSpeed, this.ySpeed);
      //   console.log(this.snake);
    }, 300);
  }

  renderedCallback() {
    const board = this.template.querySelector(".container");
    board.focus();

    // console.log(this.snake);
    // console.log(`xSpeed: ${this.xSpeed}, yspeed: ${this.ySpeed}`);
    if (!this.renderComplete) {
      this.renderComplete = true;
      this.move();
    }
  }
}
