const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const height = 10;
const width = 10;
const field = [];


//generate field
function generateField() {
    for (let row = 0; row < height; row++) {
        field[row] = [];
     for (let col = 0; col < width; col++) {
        field[row][col] = fieldCharacter;
    }

    field[0][0] = pathCharacter;
    field[Math.floor(Math.random() * field.length)][Math.floor(Math.random() * field.length)] = hole;
    field[Math.floor(Math.random() * field.length)][Math.floor(Math.random() * field.length)] = hat;

}
}

// //populate character
// function populateChar() {
//     field[0][0] = pathCharacter;
// }

// //populate hat
// function populateHat() {
//     field[Math.floor(Math.random() * field.length)][Math.floor(Math.random() * field.length)] = hat;
// }

// //populate holes
// function populateHole() {
//     field[Math.floor(Math.random() * field.length)][Math.floor(Math.random() * field.length)] = hole;
// }


print()

function print() {
    clear();
    const displayString = field.map(row => { //map
        return row.join('');
    }).join('\n');  // \n is next line
    console.log(displayString);

}

// build the prompt

function askDirections() {
    
    const direction = prompt(`Which way? `).toUpperCase();
    
        if (direction == "U") {
        console.log(`Yes`)
    } else if (direction == "D") {
        console.log(`Yes`)
    } else if (direction == "L") {
        console.log(`Yes`)
    } else if (direction == "R") {
        field.fill(pathCharacter, 1, 0);
    } else {
        console.log('Enter U, D, L or R.');
        askDirections();
    }

}


    
//     if (direction == "U") {
//         console.log(`Yes`)
//     } else if (direction == "D") {
//         console.log(`Yes`)
//     } else if (direction == "L") {
//         console.log(`Yes`)
//     } else if (direction == "R") {
//         field.fill(pathCharacter, 1, 0);
//     } else {
//         console.log('Enter U, D, L or R.');
//         askDirections();
//     }

//     //change field character to path character

// }


generateField();

function startGame() {
    print();
    askDirections();
}

startGame()