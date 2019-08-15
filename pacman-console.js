console.log("Hello, Pac-Man!"); 
console.log("Pac-Man eats ghosts for lunch."); 
/* 
I am a double 
line comment 
*/ 
// I am a single line comment 

const ghost = 'Inky'; 
console.log(ghost) 

console.log(typeof(ghost)) 
const numOfGhosts = 4; 
console.log(typeof(numOfGhosts)) 

let newGhost = 'Boo'
console.log(newGhost)

newGhost = 'Casper'
console.log(newGhost)

const sentence = `Our hero ${newGhost}, must eat, ${numOfGhosts} ghosts, for maximum points.`
const sentence2 = "Our hero " + ghost + " must eat " + numOfGhosts + " ghosts " + "for maximum points. "
console.log(sentence); 
console.log(sentence2); 

sentenceLength = sentence.length; 
console.log(sentenceLength); 

uppercaseSentence = sentence.toUpperCase(); 

// pacman-arrays.js
const ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log(`There are ${ghosts.length} ghosts.`); // these are backticks, not quotes!
console.log('Their names are: ');
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);

// pacman-objects-2.js
const ghostObjs = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghostObjs);

// // pacman-objects-2.js

// console.log(ghostList.inky); // => 'Cyan'
// console.log(ghostList.blinky); // => 'Red'

// // same as above
// console.log(ghostList['inky']); // => 'Cyan'
// console.log(ghostList['blinky']); // => 'Red'

const ghostList = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
var pacEat = () => { 
for (let i = 0; i < ghostList.length; i++){ 
    console.log('Pac-Man eats ' + ghostList[i]); 
}} 
function pacEats(){ 
    for (let i = 0; i < ghostList.length; i++){ 
        console.log('Ms. Pac-Man eats ' + ghostList[i]); 
    } 
}
pacEat()
pacEats() 


let pelletEaten = false; 
let ghostsAmount = 4; 

while (true) { 
    console.log('Ghots remaining: ' + ghostsAmount); 
    if (pelletEaten == false) { 
        console.log('Pac-Man eats the power pellet.'); 
        pelletEaten = true; 
    } else if (ghostsAmount > 0) { 
        console.log('Pac-Man eats a ghost.'); 
        ghostsAmount--; 
    } else { 
        break; 
    }
}
console.log(ghostsAmount)
console.log('Pac-Man returns home after a long day in the maze.');


// pacman-switch.js
var ghostName = 'Blinky';
var colour;

switch (ghostName) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(`${ghostName} is the colour ${colour}`);


function eatDot() { 
    console.log('MUNCH!'); 
}
var eatDotPac = function() { 
    console.log('MUNCH!');
}
var pacEatDot = () => { 
    console.log('MUNCH!'); 
}

eatDot() 
eatDotPac() 
pacEatDot() 


const highScores = []; 
var addHighScore = (highScoreList, playerInitials, score) => { 
    const record = { player: playerInitials, score: score}; 
    highScoreList.push(record); 
}
console.log(highScores)
addHighScore(highScores, 'JJB', 2900)
console.log(highScores)

addHighScore(highScores, 'JSL', 10000);
console.log(highScores) 

// pacman-return.js
function addScore(currentScore, eaten) {
    switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
    }
  
    return currentScore + scoreToAdd;
  }
  
  let score = 0; // try this with const - it won't work!
  
  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'powerPellet');
  score = addScore(score, 'firstGhost');
  console.log('Your score: ' + score);