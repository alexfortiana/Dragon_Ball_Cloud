// * VARIABLES GLOBALES

let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;

const startGame = () => {
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  // console.log("holaa")
  newGame = new Game();
  // console.log(newGame)
  newGame.gameLoop();
};

const restartGame = () => {
  gameOverScreen.style.display = "none";
  canvas.style.display = "flex";
  newGame = new Game();
  // console.log(newGame)
  newGame.gameLoop();
};

//*ADD EVENT LISTENERS

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startGame);

let restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartGame);

document.addEventListener("keydown", (event) => {
  // console.log(event);
  newGame.goku.gokuMove(event);
  // newGame.goku.gokuChanges(event)
});
