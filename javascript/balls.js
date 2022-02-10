class Ball {
  constructor() {
    this.x = -400;
    this.y = 150;
    this.width = 30;
    this.height = 30;
    this.img = new Image();
    this.img.src = "./Images/ball.png";
  }

  drawBall = (scoreParam) => {
    if (scoreParam > 15 && scoreParam < 20) {
      this.x = 40;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 35 && scoreParam < 40) {
      this.x = 150;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 50 && scoreParam < 55) {
      this.x = 390;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 65 && scoreParam < 70) {
      this.x = 290;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 85 && scoreParam < 90) {
      this.x = 55;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 105 && scoreParam < 110) {
      this.x = 150;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 125 && scoreParam < 130) {
      this.x = 390;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 150 && scoreParam < 155) {
      this.x = 290;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else if (scoreParam > 180 && scoreParam < 185) {
      this.x = 55;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else {
      this.x = -400;
    }
  };
}
