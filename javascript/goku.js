class Goku {
  constructor() {
    this.x = 230;
    this.y = 50;
    this.width = 40;
    this.height = 75;
    this.img = new Image();

    this.gokuDirection = 40;
    this.transform = false;
    this.gokuVelocity = 0;
    this.gokuGravity = 0;
    this.spriter = new Image();
    this.spriter.src = "./Images/goku-flying.png";
    this.spriterX = 0;
    this.xMove = 0;

    this.inclination = 0;
    this.toRadians = Math.PI / 180;
    this.soundTransform = new Audio()
    this.soundTransform.src = "./Sounds/transform-goku.mp3"
    
  }

  // gokuStart = (paramScore) => {
  //   if (paramScore < -1 && this.xMove <= 230) {
  //     this.xMove += 3;
      

  //     ctx.drawImage(
  //       this.spriter,
  //       this.spriterX * 40,
  //       0,
  //       40,
  //       83,
  //       this.xMove,
  //       this.y,
  //       this.width + 5,
  //       this.height + 5
  //     )
      

  //     this.spriterX += 1;
  //     if (this.spriterX > 2) {
  //       if (this.x % 2 === 0) {
  //         this.spriterX = 2;
  //       }
  //       if (this.x % 3 === 0) {
  //         this.spriterX = 4;
  //       }
  //     }
  //   }
  // };
  
  gokuStart = (paramScore) => {
    if (paramScore < -1 && this.xMove <= 230) {
      this.xMove += 1.5;
      

      ctx.drawImage(this.spriter, this.xMove, this.y, this.height, this.width)
    
    }
  };
  drawGoku = (scoreParam) => {
    if (scoreParam > -2) {
      if (this.transform === false) {
        this.img.src = "./Images/goku left.png";
        this.soundTransform.pause()
      } else {
        this.img.src = "./Images/transform-goku.png";
        this.soundTransform.play()
      }
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.translate(this.width / 2, this.height / 2);

      ctx.rotate(this.inclination * this.toRadians);
      ctx.drawImage(this.img, -(this.width / 2), -(this.height / 2));
      ctx.restore();
      // ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  };

  updatePosicion = () => {
    this.x += this.gokuVelocity;
    this.y += this.gokuGravity;

    if (this.x > canvas.width - 100 || this.x < 40) {
      this.gokuVelocity = 0;
    } else if (this.y > 150 || this.y < 20) {
      this.gokuGravity = 0;
    }
  };

  gokuPause = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      this.gokuVelocity = 0;
      this.inclination = 0;
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      this.gokuGravity = 0;
      this.inclination = 0;
    }
  };

  gokuMove = (event) => {
    if (
      (event.key === "ArrowRight" && this.x < canvas.width - 100) ||
      this.inclination > 40 ||
      this.inclination < -40
    ) {
      this.gokuVelocity = 3;
      this.inclination -= 10;
    } else if (
      (event.key === "ArrowLeft" && this.x > 40) ||
      this.inclination > 30 ||
      this.inclination < -30
    ) {
      this.gokuVelocity = -3;
      this.inclination += 10;
    } else if (event.key === "ArrowDown" && this.y < 150) {
      this.gokuGravity = 3;
      this.inclination = 0;
    } else if (event.key === "ArrowUp" && this.y > 20) {
      this.gokuGravity = -3;
      this.inclination = 180
    }
  };
}
