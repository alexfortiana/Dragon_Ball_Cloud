class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../Images/sky3.jpg";
    this.goku = new Goku();
    this.cloudsArr = [new Clouds(-260)];
    this.cloudSeparation = 250;
    this.isGameOn = true;
    this.score = -5;

    // this.cloudPosition = [-20, 100, 220, 340]
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
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
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
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.style.display = "flex";
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

    // console.log("the game is going!!")
    if (this.isGameOn) requestAnimationFrame(this.gameLoop);

    this.score += 0.02;
  };
}
