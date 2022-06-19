const bonk = new Image()
bonk.src = "asset/bonk.png"

export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 100;
    this.doge = new Image();
    this.doge.src = "asset/doge.webp";
    this.x = 0;
    this.y = this.game.height - this.height - 50;
    this.speed = 5;
  }
  
  update(x) {
    this.x = x;
    //this.y -= this.speed;
    /**if(this.y + this.height <= this.height - this.height) {
      return this.y = this.game.height - this.height + this.height;
    }**/
  }
  
  blink() {
    this.doge.src = "asset/blink.png";
    setTimeout(() => {
      this.doge.src = "asset/doge.webp";
    }, 70)
  }
  
  draw(context) {
    if(this.game.gameOver) {
      return context.drawImage(bonk, this.x, this.y, this.width, this.height);
    }
    
    context.drawImage(this.doge, this.x, this.y, this.width, this.height);
  }
 
  checkCollision() {
    this.enemies = this.game.enemy.enemies;
    for(let x = 0; x < this.enemies.length; x++) {
      this.enemy = this.enemies[x];
 
      if(this.enemy.y < this.y + this.height
        && this.enemy.y + this.game.enemy.height > this.y
        && this.enemy.x < this.x + this.height
        && this.enemy.x + this.game.enemy.height > this.x
      ) {
        this.game.gameover();
      }
    }
  }
}
