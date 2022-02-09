// * VARIABLES GLOBALES

let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;
let nameOfUser = document.querySelector("#nameOfUser")
let nameWin = document.querySelector("#nameWin")
let gokuScore = document.querySelector("#scoreWin")
let gameMusic = new Audio()
gameMusic.src = "Sounds/Dragon Ball Z_Prologue Theme 2(Extended) Buu Saga.mp3"




const startGame = () => {
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  // console.log("holaa")
  newGame = new Game();
  // console.log(newGame)
  newGame.gameLoop();
  nameWin.innerText = nameOfUser.value
  gameMusic.play()
  
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
  if(newGame !== undefined){
    newGame.goku.gokuMove(event);

  }
})

  document.addEventListener("keyup", (event) => {
    if(newGame !== undefined){
      newGame.goku.gokuPause(event);
  
    }
  

  
  
  // console.log(event);
  // newGame.goku.gokuChanges(event)
});
