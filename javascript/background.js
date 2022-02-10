class Bg {
  constructor() {
    this.x = 0;
    this.y1 = 0;
    this.y2 = 600;

    this.bg1 = new Image();
    this.bg1.src = "./Images/sky3.jpg";
    this.bg2 = new Image();
    this.bg2.src = "./Images/sky-repeat.jpg";
  }
  moveBackgrounds = (scoreParam) => {
    if (this.y1 <= -600) {
      this.y1 = 600;
    }
    if (this.y2 <= -600) {
      this.y2 = 600;
    }
    if (scoreParam > -2) {
      this.y1 -= 2;
      this.y2 -= 2;
    }
  };

  drawBackgrounds = () => {
    ctx.drawImage(this.bg1, this.x, this.y1, canvas.width, canvas.height);
    ctx.drawImage(this.bg2, this.x, this.y2, canvas.width, canvas.height);
  };
}
