const readlineSync = require ('readline-sync');

const name = readlineSync.question( 'What is your name?');

readlineSync.question ('Hello'+ name + ', Welcome to Doom!  You will risk your life to defeat Bees. Press Enter');

const badGuys  = ['Killer Bee', 'Monster', 'Queen Bee', 'Sting Monster'];
const treasure = ['Medkit','Security Armor', 'Bee Pack', 'Health Postion'];
var prize = [];
let userHealth = 30;
const option = ["Run",'Exit','Print' ];
let pickUp = treasure[ Math.floor(Math.random() *(5-1+ 2)* 3)]
function game(){
const attactPower = Math.floor(Math.random() *(5-4+3)*5);
const badGuy = badGuys [Math.floor(Math.random() *badGuys.length)];
let badGuysHealth= 58;
const badGuyPower= Math.floor(Math.random() *(5-3+2)*5)

const index =readlineSync.keyInSelect(options,'What would you like to do next?');

if (options[index]=='Exit'){
return userHealth
} else if (options[index] == " Print" ){
console.log (name + ' : n tresure: '+ pickUp);
} else if (options [index] ==='Walk'){
    let key =Math.random ();
    if (key <= .3) {
        console.log('Walking...');
    }  else if (key >= .3 ){
    console.log(badGuy +' showed up.');

    while(badguyshealth > 0 && userHealth > 0) {

        const user = readlineSync.question()
    
switch(user){
    case 'r'://runaway
    const run = Math.random();
    if(run <.5) {
        console.log 
    }}}}}
