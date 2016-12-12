/**
 *   @version 0.0.2
 *   @author Smith, Sierra (sjsmith8147@gmail.com)
 *   @summary Project 6 || created: 12.12.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let camp = [];
let counter;
let total;

function main(){
    setCounter();
    populateCamp();
    printCamp();
}

main();

function setCounter() {
    if (typeof counter === 'undefined') {
        counter = 1;
    } else {
        counter++;
    }
}

function populateCamp(){
    const COLUMNS = 8;
    for (let i = 0; i < 1; i++){
        camp[i] = [];
        for (let j = 0; j < COLUMNS; j++){
            if (j===0){
                camp[i][j] = counter;
            } else if (j === 1){
                while (typeof camp[i][j] === `undefined` || !/(^[a-z]+$){1,30}/i.test(camp[i][j])){
                    camp[i][j] = PROMPT.question(`\n Please enter last name: `);
                }
            } else if (j === 2){
                while (typeof camp[i][j] === `undefined` || !/(^[a-z]+$){1,30}/i.test(camp[i][j])) {
                    camp[i][j] = PROMPT.question(`\n Please enter first name: `);
                }
            }else if (j === 3){
                while( typeof camp[i][j] === `undefined` || camp[i][j] < 5 || camp[i][j] > 9){
                    camp[i][j] = Number(PROMPT.question(`\n During the summer, what month are you camping?`));
                }
            } else if (j === 4){
                while ( typeof camp[i][j] === `undefined` || camp[i][j] < 1 || camp[i][j] > 30){
                    camp[i][j] = Number(PROMPT.question(`\n What is the date of your first day of camp?`));
                }
            } else if ( j === 5){
                while( typeof camp[i][j] === `undefined` || camp[i][j] < 1 || camp[i][j] > 10){
                    camp[i][j] = Number(PROMPT.question(`\n How many nights are you camping? (max 10)`));
                }
            } else if (j === 6){
                while(typeof camp[i][j] === `undefined`) {
                    camp[i][j] = Number(PROMPT.question(`\n Are you going to be using an RV? (0=no, 1 = yes) `));
                }
            } else {
                if (camp[i][6] = 1){
                    if (camp[i][3] = 7){
                        camp[i][j] = 30 + (camp[i][5] * 10);
                    } else {
                        camp[i][j] = 15 + (camp[i][5] * 10);
                    }
                } else {
                    if (camp[i][3] = 7){
                        camp[i][j] = 15 + (camp[i][5] * 10);
                    } else {
                        camp[i][j] = 5 + (camp[i][5] * 10);
                    }
                }

            }
        }
    }
}

function printCamp() {
    const COLUMNS = 8;
    for (let i = 0; i < camp.length; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            console.log(`${camp[i][j]}`);
        }
        console.log(`if everything looks correct your total is $${camp[i][7]}.`)
    }
}
