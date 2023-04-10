const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;
const field = [];
let pRow = 0;
let pCol = 0;

//Create 2D array

for (let i = 0; i < row; i++) {
        field[i] = [];
        for (let j = 0; j < col; j++) {
            field[i][j] = fieldCharacter;
        }
    }

//print in string form
function print() {
    clear();
    const displayString = field.map(row => {
        return row.join('');
    }).join('\n');
    console.log(displayString);
}

//setStart
    
field[0][0] = pathCharacter;

//setHole

for (let k = 0; k < 10; k++) {
    field[Math.floor(Math.random() * row)][Math.floor(Math.random() * col)] = hole;
}

//setHat

field[Math.floor(Math.random() * row)][Math.floor(Math.random() * col)] = hat;


//prompt
function askQuestion() {
    const direction = prompt(`Which way? `).toUpperCase();

    if (direction == "R") {
        pCol += 1;
    } else if (direction == "L") {
        pCol -= 1;
    } else if (direction == "U") {
        pRow -= 1;
    } else if (direction == "D") {
        pRow += 1;
    } else {
        console.log(`Enter U, D, L or R`);
        prompt(`Which way? `);
    }

    field[pRow][pCol] = pathCharacter;

    //print()
}


function startGame() {

    let isPlaying = true;

    while(isPlaying) {
        print();

    if (pCol < 0 || pCol > 9 || pRow < 0 || pRow > 9) {
        isPlaying = false;
        console.log(`Out of bounds - Game End!`);

    } else if (field[pRow][pCol] == hole) {
        isPlaying = false;
        console.log(`Sorry, you fell down a role`);

    } else if (field[pRow][pCol] == hat) {
        isPlaying = false;
        console.log(`You found your hat!`);
    }
    else {
        askQuestion();
    }

}
}

startGame();