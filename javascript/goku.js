class Goku {
  constructor() {
    this.x = 230;
    this.y = 50;
    this.width = 40;
    this.height = 75;
    this.img = new Image();

    this.gokuDirection = 40;
    this.gokuGravity = 30;
    this.transform = false;
  }

  // gokuStart = (scoreParam) => {
  //   if(scoreParam < 0 ){
  //   this.img.src = "/Users/mac/Downloads/Dragon_Ball_Cloud-main/Images/songoku-goes.png"
  //   this.width = 220;
  //   this.height = 220;
  //   }

  drawGoku = () => {
    if (this.transform === false) {
      this.img.src = "./Images/goku left.png";
      this.width = 40;
      this.height = 75;
    } else {
      this.img.src = "./Images/transform-goku.png";
      this.width = 60;
      this.height = 85;
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    console.log(this.transform);
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
    }
    // this.img.src = "./Images/son-goku-sit.jpg"
    // } else if(event.key === " "){
    //   this.y = this.y + 100
    //   this.img.src = "../Images/"
    // }
  };
}

// if(this.x % 3 === 0) {
//   //  this.img.src = "../Images/goku-right-degree.png"
//   //  this.width = 45 aqui posar allo de rotar

//   } else {
//     this.img.src = "./Images/goku right.png"

//   }

// if(this.x % 3 === 0) {
//   // this.img.src = "../Images/goku-left-degree.png"

// }else{
//   this.img.src = "./Images/goku left.png"

// }
