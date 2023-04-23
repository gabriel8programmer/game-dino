
//get elements
const canvas = document.getElementById("canvas");

//create a context for drawing
const ctx = canvas.getContext("2d");
//get the width and height of the game screen
const width = canvas.width;
const height = canvas.height;
const gravity = 10;

//create the object of the dino
class Dino {
  
  constructor(x,y){
    this.size = 32;
    this.x = x;
    this.y = y;
    this.is_floor = true;
    this.is_jumping = false;
    this.impulse_jump = 5;
    this.weight = 10;
  }
}

//object Dino
const dino = new Dino(32, height-64);

//this function creates a surface for drawing
const render_game = ()=>{
  
  //cleaning screen before drawing
  ctx.clearRect(0, 0, width, height);
  
  //drawing the floor of the game with a line
  ctx.beginPath();
  ctx.strokeStyle = "#ddd";
  ctx.moveTo(0, height-32);
  ctx.lineTo(width, height-32);
  ctx.stroke();
  ctx.closePath();
  
  //drawing the Dino
  ctx.beginPath();
  ctx.fillStyle = "#ddd";
  ctx.fillRect(dino.x, dino.y, dino.size, dino.size);
  ctx.closePath();
}

//this function is responsible for updating the game calling it in the same loop
const update_game = ()=>{
  //calling methods for drawing the update_game
  render_game();
  //update objects in screen
  if (dino.is_jumping){
    dino.fall();
  }
  
  requestAnimationFrame(update_game);
}

//calling method for to start the game
update_game();

//controoller events
document.addEventListener("click", ()=>{
  dino.jump();
});