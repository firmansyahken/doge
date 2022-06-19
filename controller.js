export class Controller {
  constructor(game) {
    this.game = game;
    this.x = 0;
    document.getElementById("right").addEventListener("click", (e) => {
      e.target.classList.add("active");
     
      setTimeout(() => {
        e.target.classList.remove("active");
      },200);
      
      if (this.x <= 100) {
        this.game.player.blink();
        new Audio("asset/blink.mp3").play();
        return this.x += 100;
      }
      
      this.x = this.x;
      
    })
    
    document.getElementById("left").addEventListener("click", (e) => {
      e.target.classList.add("active");
     
      setTimeout(() => { 
        e.target.classList.remove("active") 
      },200);
      
      if (this.x >= 100) {
        this.game.player.blink();
        new Audio("asset/blink.mp3").play();
        return this.x -= 100;
      }
      
      this.x = this.x
      
    })
  }
  
}
