class Game {
  constructor() {
    this.move = 0;
    this.goku = new Goku();
    this.cloudsArr = [new Clouds(-260)];
    this.cloudSeparation = 250;
    this.isGameOn = true;
    this.score = -5;

    this.life = new Life();
    this.alubia = new Alubia();
    this.bg = new Bg();

    this.imgGo3 = new Image();
    this.imgGo3.src = "./Images/3.png";

    this.imgGo2 = new Image();
    this.imgGo2.src = "./Images/2.png";

    this.imgGo1 = new Image();
    this.imgGo1.src = "./Images/1.png";

    this.imgGo = new Image();
    this.imgGo.src = "./Images/go.png";

    this.ball = new Ball();

    this.sound3 = new Audio()
    this.sound3.src = "../Sounds/3.mp3"

    this.sound2 = new Audio()
    this.sound2.src = "../Sounds/2.mp3"

    this.sound1 = new Audio()
    this.sound1.src = "../Sounds/1.mp3"

    this.soundGo = new Audio()
    this.soundGo.src = "../Sounds/go.mp3"

    this.soundPotence = new Audio()
    this.soundPotence.src = "../Sounds/colisionball-goku.mp3"

    this.soundPoints = new Audio()
    this.soundPoints.src = "../Sounds/beep.mp3"

    
  }

  drawGo = () => {
    if (this.score < -4) {
      ctx.drawImage(this.imgGo3, canvas.width / 2 - 25, 200, 50, 80);
      this.sound3.play()
    } else if (this.score > -4 && this.score < -3) {
      ctx.drawImage(this.imgGo2, canvas.width / 2 - 25, 200, 50, 80);
      this.sound2.play()
    } else if (this.score > -3 && this.score < -2) {
      ctx.drawImage(this.imgGo1, canvas.width / 2 - 25, 200, 50, 80);
      this.sound1.play()
    } else if (this.score > -2 && this.score < -1) {
      ctx.drawImage(this.imgGo, canvas.width / 2 - 45, 180, 120, 150);
      this.soundGo.play()
      gameMusic.play();

    }
  };

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
      eachCloud.velocity = 7;
    } else if (this.score > 100) {
      eachCloud.velocity = 10;
    }
  };

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
      if (this.goku.transform === true) {
        this.goku.y += 100;

        this.goku.transform = false;
      } else if (this.goku.transform === false) {
        this.isGameOn = false;
        gameMusic.pause();
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gokuScore.innerText = Math.floor(this.score) + " points!";
        endMusic.play()
      }
    }
  };

  checkBallCollision = () => {
    if (
      this.goku.x < this.ball.x + this.ball.width &&
      this.goku.x + this.goku.width > this.ball.x &&
      this.goku.y < this.ball.y + this.ball.height &&
      this.goku.height + this.goku.y > this.ball.y
    ) {
      this.score += 5;
      this.soundPoints.play()
      
    }
  };

  checkAlubiaCollision = () => {
    if (
      this.goku.x < this.alubia.x + this.alubia.width &&
      this.goku.x + this.goku.width > this.alubia.x &&
      this.goku.y < this.alubia.y + this.alubia.height &&
      this.goku.height + this.goku.y > this.alubia.y
    ) {
      this.score += 0.2;
      this.goku.transform = true;
      
      this.soundPotence.play()
      

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

    this.bg.moveBackgrounds(this.score);

    this.bg.drawBackgrounds();

    this.life.drawLife(this.goku.transform);
    this.alubia.drawAlubia(this.score);

    this.goku.drawGoku(this.score);
    this.goku.gokuStart(this.score);

    this.cloudsArr.forEach((eachCloud) => {
      eachCloud.drawClouds();
    });
    this.drawScore();
    this.drawGo();
    

    this.checkBallCollision();
    this.checkAlubiaCollision();

    this.ball.drawBall(this.score);
    this.goku.updatePosicion();

    if (this.isGameOn) requestAnimationFrame(this.gameLoop);

    this.score += 0.02;
  };
}
