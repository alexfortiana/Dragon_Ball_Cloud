class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../Images/sky3.jpg";
    this.move = 0
    // this.bg2 = new Image();
    // this.bg2.src = "../Images/sky3.jpg";
    this.goku = new Goku();
    this.cloudsArr = [new Clouds(-260)];
    this.cloudSeparation = 250;
    this.isGameOn = true;
    this.score = -5;

    this.imgGo3 = new Image();
    this.imgGo3.src = "../Images/3.png"

    this.imgGo2 = new Image();
    this.imgGo2.src = "../Images/2.png" 

    this.imgGo1 = new Image();
    this.imgGo1.src = "../Images/1.png" 

    this.imgGo = new Image();
    this.imgGo.src = "../Images/go.png" 

    this.ball = new Ball()



    

    


    // this.cloudPosition = [-20, 100, 220, 340]
  }

  drawGo = () => {
    if(this.score < -4){
    ctx.drawImage(this.imgGo3, canvas.width / 2 -25, 200, 50, 80)
    //poner sonidos tambien
    } else if(this.score > -4 && this.score < -3 ) {
      ctx.drawImage(this.imgGo2, canvas.width / 2 -25, 200, 50, 80)
    } else if(this.score > -3 && this.score < -2 ){
      ctx.drawImage(this.imgGo1, canvas.width / 2 -25, 200, 50, 80)
     } else if(this.score > -2 && this.score < -1) {
        ctx.drawImage(this.imgGo, canvas.width / 2 -45, 180, 120, 150)
      }
    }
  

  spawningClouds = () => {
    let lastCloud = this.cloudsArr[this.cloudsArr.length - 1];

    if (lastCloud.y < canvas.width - this.cloudSeparation) {
      let cloudPosition2 = [-20, 100, 220, 340];

      let randomIndex = Math.random() * cloudPosition2.length;
      let roundNumber = Math.floor(randomIndex);
      cloudPosition2.splice(roundNumber, 1);

      let cloud1 = new Clouds(cloudPosition2[0]);
      let cloud2 = new Clouds(cloudPosition2[1]);
      let cloud3 = new Clouds(cloudPosition2[2]);
     

      this.cloudsArr.push(cloud1);
      this.cloudsArr.push(cloud2);
      this.cloudsArr.push(cloud3);
      
    }
  };

  levelChange = (eachCloud) => {
    if (this.score > 25) {
      eachCloud.velocity = 4;
    } else if (this.score > 50) {
      eachCloud.velocity = 5;
    } else if (this.score > 75) {
      eachCloud.velocity = 6;
    } else if (this.score > 100) {
      eachCloud.velocity = 7;
    }
  };

  drawBackground = () => {
    
    ctx.drawImage(this.bg, 0, this.move, canvas.width, canvas.height)
    
    


    // ctx.drawImage(this.bg2, 0, 0, canvas.width, canvas.height);
  };

  // movingBackground = () => {
  //   if (this.bg.y <= -600) {
  //     this.bg.y = 600
  //   }
  //   if(this.bg2.y <= -600) {
  //     this.bg2.y = 600
  //   }

  //   this.bg.y -= 5
  //   this.bg2.y -= 5

  // }
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  checkGokuCollision = (eachCloudParam) => {
    if (
      this.goku.x < eachCloudParam.x + eachCloudParam.width &&
      this.goku.x + this.goku.width > eachCloudParam.x &&
      this.goku.y + this.goku.height <
        eachCloudParam.y + eachCloudParam.height &&
      this.goku.height + this.goku.y > eachCloudParam.y + 10 
    ) {
      if(this.goku.transform) {
        this.goku.transform = false

      } else {
        this.isGameOn = false;
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";

      }
    // } else if(){
    //   // eachCloudParam.style.display = "none"
    //   
    // && this.goku.transform === false

    // }
    }
  };


  checkBallCollision = () => {
    // console.log(this.goku.y, this.goku.width, this.goku.height, this.goku.x)
    console.log(this.goku.transform)
    if (
      this.goku.x < this.ball.x + this.ball.width &&
      this.goku.x + this.goku.width > this.ball.x &&
      this.goku.y < this.ball.y + this.ball.height &&
      this.goku.height + this.goku.y > this.ball.y) {
      this.score += 0.2 
      this.goku.transform = true;
      
      console.log(this.goku.transform)
      
    }
  };

  drawScore() {
    if (this.score > 0) {
      ctx.font = "16px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("Score: " + this.score.toFixed(0), canvas.width - 200, 20);
    }
  }

  gameLoop = () => {
    this.clearCanvas();

    this.cloudsArr.forEach((eachCloud) => {
      eachCloud.cloudsMove();
    });
    this.spawningClouds();

    this.cloudsArr.forEach((eachCloud) => {
      this.checkGokuCollision(eachCloud);
      this.levelChange(eachCloud);
    });

    this.drawBackground();
    
    this.goku.drawGoku();
    
    
    this.cloudsArr.forEach((eachCloud) => {
      eachCloud.drawClouds();
    });
    this.drawScore();
    this.drawGo()

    
    this.checkBallCollision()
    // this.goku.gokuTransform()
    


    this.ball.drawBall(this.score)




   

    

    // console.log("the game is going!!")
    if (this.isGameOn) requestAnimationFrame(this.gameLoop);

    this.score += 0.02;
  };
}
