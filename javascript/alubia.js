class Alubia {
  constructor() {
    this.x = -400;
    this.y = 200;
    this.width = 30;
    this.height = 30;
    this.img = new Image();
    this.img.src = "./Images/alubia.png"; // x canviar alubias
  }
  drawAlubia = (scoreParam) => {
    if (scoreParam > 5 && scoreParam < 10) {
      //    this.x = Math.random() * (canvas.width -20)
      this.x = 280;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 40 && scoreParam < 45) {
      this.x = 50;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 70 && scoreParam < 75) {
      this.x = 190;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 95 && scoreParam < 100) {
      this.x = 300;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 155 && scoreParam < 160) {
      this.x = 55;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else {
      this.x = -400;
    }
  };
}
