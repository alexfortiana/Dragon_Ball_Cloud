class Ball {
  constructor() {
    this.x = -400;
    this.y = 150;
    this.width = 30;
    this.height = 30;
    this.img = new Image();
    this.img.src = "../Images/ball.png";
  }

  drawBall = (scoreParam) => {
    if (scoreParam > 5 && scoreParam < 10) {
      //    this.x = Math.random() * (canvas.width -20)
      this.x = 40;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else {
      this.x = -400;
    }
  };
}

//   }else if(scoreParam > 40 && scoreParam < 45){
//     ctx.drawImage(this.img,this.x, this.y, this.width, this.height)
//   }else if(scoreParam > 65 && scoreParam < 70){
//     ctx.drawImage(this.img,this.x, this.y, this.width, this.height)
//   }else if(scoreParam > 85 && scoreParam < 90){
//     ctx.drawImage(this.img,this.x, this.y, this.width, this.height)
//   }else if(scoreParam > 105 && scoreParam < 105){
//     ctx.drawImage(this.img,this.x, this.y, this.width, this.height)
//   } //limpiar
