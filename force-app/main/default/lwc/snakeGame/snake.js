export const move = (snake, xSpeed, ySpeed) => {
  const newSnake = snake;
  const head = newSnake[0];
  //   console.log(xSpeed);

  let x = head.x + xSpeed;
  if (x > 21) {
    x = 1;
  } else if (x === 0) {
    x = 21;
  }
  //   console.log(x);
  let y = head.y + ySpeed;
  if (y > 21) {
    y = 1;
  } else if (y === 0) {
    y = 21;
  }
  //   console.log(y);
  let newHead = { x, y, style: `grid-row-start: ${y};grid-column-start: ${x}` };
  //   console.log(newHead);
  newSnake.pop();
  newSnake.unshift(newHead);

  return newSnake;
};

export const eatFood = (snake, food) => {
  let newSnake = snake;
  newSnake.unshift(food);
  return newSnake;
};

export const detectFood = (snake, xSpeed, ySpeed, food) => {
  const newSnake = snake;
  const head = newSnake[0];

  let x = head.x + xSpeed;
  if (x > 21) {
    x = 1;
  } else if (x === 0) {
    x = 21;
  }
  let y = head.y + ySpeed;
  if (y > 21) {
    y = 1;
  } else if (y === 0) {
    y = 21;
  }

  if (x === food.x && y === food.y) {
    return true;
  }
  return false;
};

export const detectBody = (snake, xSpeed, ySpeed) => {
  const newSnake = snake;
  const head = newSnake[0];

  let x = head.x + xSpeed;
  if (x > 21) {
    x = 1;
  } else if (x === 0) {
    x = 21;
  }
  let y = head.y + ySpeed;
  if (y > 21) {
    y = 1;
  } else if (y === 0) {
    y = 21;
  }
  let collision = false;
  newSnake.forEach((part) => {
    if (part.x === x && part.y === y) {
      collision = true;
    }
  });
  return collision;
};

export const randomFood = (snake) => {
  let x = Math.floor(Math.random() * 19 + 1);
  let y = Math.floor(Math.random() * 19 + 1);
  //   console.log(x);
  //   console.log(y);
  //   while (snake.some((el) => el.x === x && el.y === y)) {
  //     randomFood(snake);
  //     // x = Math.floor(Math.random() * 19 + 1);
  //     // y = Math.floor(Math.random() * 19 + 1);
  //   }
  return { x, y, style: `grid-row-start:${y};grid-column-start:${x}` };
};
