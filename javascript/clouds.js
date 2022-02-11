class Clouds {
  constructor(posXParam) {
    this.x = posXParam;
    this.y = canvas.height;
    this.width = 130;
    this.height = 75;
    this.img = new Image();
    this.img.src = "./Images/cloud.png";
    this.velocity = 2.5;
  }

  drawClouds = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  cloudsMove = () => {
    this.y = this.y - this.velocity;
  };
}
