<template>
  <div class="snake-game">
    <canvas ref="canvas" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  name: 'SnakeGame',
  mounted() {
    this.startGame();
  },
  methods: {
    startGame() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      const box = 20; // 每个方块的大小
      let snake = [{ x: 9 * box, y: 9 * box }];
      let direction = 'RIGHT';
      let food = this.createFood();

      document.addEventListener('keydown', this.changeDirection);

      const game = setInterval(() => {
        if (this.isGameOver(snake)) {
          clearInterval(game);
          alert('游戏结束！');
          return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawFood(ctx, food);
        this.drawSnake(ctx, snake);
        this.moveSnake(snake, direction);

        if (snake[0].x === food.x && snake[0].y === food.y) {
          food = this.createFood();
        } else {
          snake.pop();
        }
      }, 100);
    },
    createFood() {
      const x = Math.floor(Math.random() * 20) * 20;
      const y = Math.floor(Math.random() * 20) * 20;
      return { x, y };
    },
    drawFood(ctx, food) {
      ctx.fillStyle = 'red';
      ctx.fillRect(food.x, food.y, 20, 20);
    },
    drawSnake(ctx, snake) {
      ctx.fillStyle = 'green';
      snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, 20, 20);
      });
    },
    moveSnake(snake, direction) {
      const head = { ...snake[0] };
      if (direction === 'LEFT') head.x -= 20;
      if (direction === 'UP') head.y -= 20;
      if (direction === 'RIGHT') head.x += 20;
      if (direction === 'DOWN') head.y += 20;
      snake.unshift(head);
    },
    changeDirection(event) {
      if (event.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
      if (event.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
      if (event.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
      if (event.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
    },
    isGameOver(snake) {
      const head = snake[0];
      return (
        head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
      );
    }
  }
}
</script>

<style scoped>
.snake-game {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
</style> 