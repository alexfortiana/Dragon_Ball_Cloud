class Goku {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 40;
    this.height = 75;
    this.img = new Image();
    this.img.src = "../Images/goku left.png";
    this.gokuDirection = 40;
    this.gokuGravity = 30;
  }

  drawGoku = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  gokuMove = (event) => {
    if (event.key === "ArrowRight" && this.x < canvas.width - 100) {
      this.x = this.x + this.gokuDirection;
    } else if (event.key === "ArrowLeft" && this.x > 40) {
      this.x = this.x - this.gokuDirection;
    } else if (event.key === "ArrowDown" && this.y < 150) {
      this.y = this.y + this.gokuGravity;
    } else if (event.key === "ArrowUp" && this.y > 20) {
      this.y = this.y - this.gokuGravity;
      // this.img.src = "../Images/son-goku-sit.jpg"
    }
  };
}
