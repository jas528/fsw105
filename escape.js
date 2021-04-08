var readlineSync = require('readline-sync');
var playerName = readlineSync.question('May I have your name? ');
console.log('Hi ' + playerName + '!');

var welcomeMessage = 'Welcome ${playerName} to the Escape Room Simulation!';
console.log (welcomeMessage);

// Boolean Flags
var isPlayerAlive= true;
var hasfoundkey =false;


while (isPlayerAlive ==true)
{
    const menuID = readlineSync. keyIn ('Enter 1 to Enter 2 to find the key, in Enter 3 to open door', {limit:'$<1-3>'});
if( menuID ==1) {
    //Player put the hand in the hole
    //Player is dead game is over
  console.log(` ${playerName} you have died `) 
   isPlayerAlive=false
}else if(menuID==2){
    console.log(` ${playerName} you found the key sucessfully. Proceed to menu option 3 to open doorsucessfully.`)
    hasfoundkey = true;
console.log (hasfoundkey)
}
else if (menuID==3 && hasfoundkey== false){
  console.log  (`try again you dont have the key`)
}else if (menuID==3 && hasfoundkey== true){
    console.log  (`try again you dont have the key`)
  }}