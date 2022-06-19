const pentung = new Image();
pentung.src = "asset/pentungan.webp";

export class Enemy {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 50;
    this.enemies = [{"x": 0, "y": 0}];
    this.delay = 50;
    this.current = this.delay;
    this.speed = 5;
  }
  
  generate() {
    const pattern = [0, 100, 200];
    this.result = Math.floor(Math.random() * 3);
    this.enemies.push({"x":pattern[this.result], "y": 0}) 
  }
  
  level() {
    switch (this.game.score) {
      case 10:
        this.speed = 7;
        break;
      case 20:
        this.speed = 10;
        this.delay = 40;
        break;
      case 30:
        this.speed = 15;
        this.delay = 30;
        break;
      default:
        this.speed;
    }
  }
  
  update() {
    this.current -= 1;
    if(this.current === 0) {
      this.generate()
      return this.current = this.delay;
    }
    this.level()
  }
  
  draw(context) {
    for(let i = 0; i < this.enemies.length; i++) {
      this.enemy = this.enemies[i]
      context.drawImage(pentung, this.enemy.x, this.enemy.y+=this.speed, this.width, this.height);
      if(this.enemy.y > this.game.height) {
        this.enemies.splice(i, 1)
        this.game.score += 1;
      }
    }
  }
}
