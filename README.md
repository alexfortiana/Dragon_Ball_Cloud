## Dragon Ball Cloud

https://alexfortiana.github.io/Dragon_Ball_Cloud/

### Description

Dragon Ball Cloud is a game where the character will have obstacles that he will
have to avoid by turning to the left or to the right, if he touches the obstacle
the game is over.

### MVP

- the game has a character that moves horizontally
- the obstacles appear randomly from the bottom of the screen

### Backlog

- add scoreboard
- put the name of the user
- sounds and music

### Data structure

## main.js

- startGame(){}
- restartGame(){}

## game.js

- spawningCloud(){}
- drawBackground(){}
- checkGokuCollision(){}
- gameLoop(){}

## clouds.js

- drawClouds(){}
- cloudsMoveUp(){}

### States and States Transitions

- splashScreen
- gameScreen
- gameOverScreen

### Task

- main - buildDom
- main - buildSplashScreen
- main - buildGameScreen
- main - buildGameOverScreen
- main - addEventListener
- game - startLoop
- game - drawCanvas
- game - drawBackground
- goku - draw
- goku - move
- clouds - draw
- clouds - move
- game - checkGokuCollision
- game - gameOver

### Additional links

#### Trello

https://trello.com/b/hBzWDbR0/dragon-ball-game

#### Slides

https://docs.google.com/presentation/d/1mUYqQCDNs9lZ9js2vQw5z2H9Cd-gSct5oAXaiO_0XRo/edit?usp=sharing
