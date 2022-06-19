// Code by Firmansyahken:v

import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Controller } from "./controller.js";

class Game {
  constructor(width, height) {
    this.gameOver = false;
    this.width = width;
    this.height = height;
    this.score = 0;
    this.music = new Audio();
    this.player = new Player(this);
    this.enemy = new Enemy(this);
    this.controller = new Controller(this);
  }
  
  update() {
    this.player.update(this.controller.x);
    this.enemy.update();
    this.player.checkCollision();
    document.getElementById("score").innerText = this.score;
  }
  
  draw(context) {
    this.player.draw(context);
    this.enemy.draw(context);
  }
  
  gameover() {
    const sfx = new Audio("asset/tung.mp3");
    sfx.currentTime = 0.5;
    sfx.play();
    this.music.pause()
    this.gameOver = true;
    document.getElementById("finalscore").innerText = this.score;
    setTimeout(() => { document.querySelector(".gameover").style.display = "flex"}, 500);
  }
}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = canvas.scrollWidth;
canvas.height = window.innerHeight - 100;
const game = new Game(canvas.width, canvas.height);
const preloader = document.querySelector(".preloader")

function animate() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  game.update();
  game.draw(ctx);
  let animation = requestAnimationFrame(animate);
  if (game.gameOver) {
    cancelAnimationFrame(animation);
  }
}

document.getElementById("start").addEventListener("click", function() {
  Start();
})

function Music() {
  game.music.src = "asset/ost.mp3";
  game.music.currentTime = 15;
  game.music.loop = true;
  game.music.play();
}

function Start() {
  preloader.style.display = "none";
  animate();
  Music();
}
