// AQUI GUARDO LAS VARIABLES GLOBALES

let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;
let nameOfUser = document.querySelector("#nameOfUser");
let nameWin = document.querySelector("#nameWin");
let gokuScore = document.querySelector("#scoreWin");
let startMusic = new Audio();
startMusic.src = "./Sounds/start-song.mp3";

let gameMusic = new Audio();
gameMusic.src = "./Sounds/game_music.mp3";

let endMusic = new Audio();
endMusic.src = "./Sounds/end-song.mp3";

//FUNCIONES PRINCIPALES

const startGame = () => {
  splashScreen.style.display = "none";
  canvas.style.display = "flex";

  newGame = new Game();

  newGame.gameLoop();
  nameWin.innerText = nameOfUser.value;
  startMusic.pause();
};

const restartGame = () => {
  gameOverScreen.style.display = "none";
  canvas.style.display = "flex";
  newGame = new Game();

  newGame.gameLoop();

  endMusic.pause();
};

//FUNCIONES PARA EL AUDIO

const muteAudio = () => {
  if (newGame) {
    newGame.sound3.volume = 0;
    newGame.sound2.volume = 0;
    newGame.sound1.volume = 0;
    newGame.soundGo.volume = 0;
    newGame.soundPotence.volume = 0;
    newGame.soundPoints.volume = 0;
    newGame.goku.soundTransform.volume = 0;
    startMusic.volume = 0;
    gameMusic.volume = 0;
    endMusic.volume = 0;
  }
  if (splashScreen) {
    startMusic.volume = 0;
  } else if (gameOverScreen) {
    endMusic.volume = 0;
    endMusic.volume = 0.05;
  }
};

const onAudio = () => {
  if (newGame) {
    newGame.sound3.volume = 0.05;
    newGame.sound2.volume = 0.05;
    newGame.sound1.volume = 0.05;
    newGame.soundGo.volume = 0.05;
    newGame.soundPotence.volume = 0.05;
    newGame.soundPoints.volume = 0.05;
    newGame.goku.soundTransform.volume = 0.05;
    gameMusic.volume = 0.05;
  }
  if (splashScreen && newGame === undefined) {
    startMusic.play();
    startMusic.volume = 0.05;
  }
  if (gameOverScreen && newGame === undefined) {
    endMusic.volume = 0.05;
  }
};

//AQUI GUARDO LOS ADD EVENT LISTENERS

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startGame);

let restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartGame);

let onMusic = document.querySelector("#sonido1");
onMusic.addEventListener("click", onAudio);

let offMusic = document.querySelector("#sonido2");
offMusic.addEventListener("click", muteAudio);

document.addEventListener("keydown", (event) => {
  if (newGame !== undefined) {
    newGame.goku.gokuMove(event);
  }
});

document.addEventListener("keyup", (event) => {
  if (newGame !== undefined) {
    newGame.goku.gokuPause(event);
  }
});
