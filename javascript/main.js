// * VARIABLES GLOBALES

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
startMusic.play()

let gameMusic = new Audio();
gameMusic.src = "./Sounds/game_music.mp3";

let endMusic = new Audio();
endMusic.src = "./Sounds/end-song.mp3";

const startGame = () => {
  splashScreen.style.display = "none";
  canvas.style.display = "flex";

  newGame = new Game();

  newGame.gameLoop();
  nameWin.innerText = nameOfUser.value;
  startMusic.pause()
};

const restartGame = () => {
  gameOverScreen.style.display = "none";
  canvas.style.display = "flex";
  newGame = new Game();

  newGame.gameLoop();

  endMusic.pause();
};


const muteAudio = () => {
  if(newGame){
  newGame.sound3.volume = 0;
  newGame.sound2.volume = 0;
  newGame.sound1.volume = 0;
  newGame.soundGo.volume = 0;
  newGame.soundPotence.volume = 0;
  newGame.soundPoints.volume = 0;
  newGame.goku.soundTransform.volume = 0;
  startMusic.volume = 0;
  gameMusic.volume = 0;
  endMusic.volume = 0
}

if(splashScreen || gameOverScreen){
  startMusic.volume = 0;

}



}

const onAudio = () => {
  if(newGame){
  newGame.sound3.volume = 1;
  newGame.sound2.volume = 1;
  newGame.sound1.volume = 1;
  newGame.soundGo.volume = 1;
  newGame.soundPotence.volume = 1;
  newGame.soundPoints.volume = 1;
  newGame.goku.soundTransform.volume = 1;
  startMusic.volume = 1;
  gameMusic.volume = 1;
  endMusic.volume = 1
  }
  if(splashScreen || gameOverScreen ){
    startMusic.volume = 1;
  }
  
}

//*ADD EVENT LISTENERS

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startGame);

let restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartGame);

// let muteMusic = document.querySelectorAll("video, audio");
// muteMusicOn = () => {
//   muteMusic = muteMusic.volume = 0.9;
// };

let onMusic = document.querySelector("#sonido1");
onMusic.addEventListener("click", onAudio);

// muteMusicOff = () => {
//   muteMusic = muteMusic.volume = 0.1;
// };

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
