class Goku {
  constructor() {
    this.x = 230;
    this.y = 50;
    this.width = 40;
    this.height = 75;
    this.img = new Image();

    this.gokuDirection = 40;
    this.transform = false;
    this.gokuVelocity = 0
    this.gokuGravity = 0;
    this.spriter = new Image()
    this.spriter.src = "../Images/goku-move.png"
    this.spriterX = 0
    // this.spriterY = 0
    
    
  }

  // gokuStart = () => {
     
  //     // ctx.drawImage(this.spriter, this.spriterX * 49, 79, 49, 79, this.x, this.y, this.width,this.height);
  //     // this.width = 220;
  //     // this.height = 220;
  //     ctx.drawImage(this.spriter, this.spriterX * 40, 0, 40, 83, this.x, this.y, this.width, this.height)
  //     // ctx.drawImage(this.spriter,  this.x, this.y, this.width, this.height)
  //     this.spriterX += 1
  //     if(this.spriterX > 2){
  //       this.spriterX = 0

  //     // } setTimeout((gokuStart(),300)
  //     }
  //   }
    
  

  drawGoku = (scoreParam) => {
    
    
    if(scoreParam > -2){
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
    // console.log(this.transform);
  } 
  };

  updatePosicion = () => {
    this.x += this.gokuVelocity
    this.y += this.gokuGravity


    if(this.x > canvas.width - 100 || this.x < 40 ) {
      this.gokuVelocity = 0

      
      
    } else if(this.y > 150 || this.y < 20){
    this.gokuGravity = 0
    }
  } 

  gokuPause = (event) => {
    if (event.key === "ArrowRight" || event.key ===  "ArrowLeft") {
      this.gokuVelocity = 0
            
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      this.gokuGravity = 0
  }

  }

  gokuMove = (event) => {
    if (event.key === "ArrowRight" && this.x < canvas.width - 100) {
      this.gokuVelocity = 3
      
      // this.x = this.x + this.gokuVelocity;
    } else if (event.key === "ArrowLeft" && this.x > 40) {
      this.gokuVelocity = -3
      

      // this.x = this.x - this.gokuVelocity;
      
    } else if (event.key === "ArrowDown" && this.y < 150) {
      this.gokuGravity = 3
    } else if (event.key === "ArrowUp" && this.y > 20) {
      this.gokuGravity = -3
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







// PER SI NO FUNCIONA LA PROVA

// gokuMove = (event) => {
//   if (event.key === "ArrowRight" && this.x < canvas.width - 100) {
//     this.x = this.x + this.gokuDirection;
//   } else if (event.key === "ArrowLeft" && this.x > 40) {
//     this.x = this.x - this.gokuDirection;
//   } else if (event.key === "ArrowDown" && this.y < 150) {
//     this.y = this.y + this.gokuGravity;
//   } else if (event.key === "ArrowUp" && this.y > 20) {
//     this.y = this.y - this.gokuGravity;
//   }
// };
