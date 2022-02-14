let playerShips = [];
let playerGuess = [];
let enemyShips = [];
let enemyGuess = [];
let playerNum = 17;
let enemyNum = 17;
let playerTurn = true;

function setupVars(){
    //init with 0s 
    for(let i = 0; i < 100; i++){
        playerShips[i] = 0;
        enemyShips[i] = 0;
        playerGuess[i] = 0;
        enemyGuess[i] = 0;
    }
}

//create grid in js rather than hardcoded html for ease
function setupBoard(){
    let btn = document.getElementById("startGameBtn");
    btn.style.display = "none";

    let s = document.createElement("div");
    s.setAttribute("class", "contain");
    for(let i = 0; i < 100; i++){
        let d = document.createElement("div");
        d.setAttribute("class", "square");
        d.setAttribute("id", i);
        d.addEventListener("click", placeCarrier);
        s.appendChild(d);
    }
    document.body.prepend(s);
    let h1 = document.createElement("H1");
    h1.innerText = "Place the carrier (5 spaces)";
    h1.setAttribute("id", "theH1");
    let h2 = document.createElement("H2");
    h2.innerText = "";
    h2.setAttribute("id", "theH2");
    document.body.prepend(h2);
    document.body.prepend(h1);
}

//next 5 funcs handle placement of each ship type
//can only place number of spaces = number of spaces ship occupies
//ran out of time to check for straight line placement
function placeCarrier(evt){
    let d = evt.target;
    if(d.style.backgroundColor == ''){
        if(playerNum != 12){
            d.style.backgroundColor = 'green';
            playerNum--;
            playerShips[d.id] = 1;
        }
        if(playerNum == 12){
            let b = document.getElementById("startGameBtn");
            b.style.display = "initial";
            b.addEventListener("click", setupPlaceBattleship);
        }
    }
    else{
        d.style.backgroundColor = '';
        playerNum++;
        playerShips[d.id] = 0;
        if(playerNum > 12){
            let b = document.getElementById("startGameBtn");
            b.style.display = "none";
            b.removeEventListener("click", setupPlaceBattleship);
        }
    }
}
function placeBattleship(evt){
    let d = evt.target;
    if(d.style.backgroundColor == ''){
        if(playerNum != 8){
            d.style.backgroundColor = 'green';
            playerNum--;
            playerShips[d.id] = 1;
        }
        
        if(playerNum == 8){
            let b = document.getElementById("startGameBtn");
            b.style.display = "initial";
            b.addEventListener("click", setupPlaceCruiser);
            
        }
    }
    else{
        d.style.backgroundColor = '';
        playerNum++;
        playerShips[d.id] = 0;
        if(playerNum > 8){
            let b = document.getElementById("startGameBtn");
            b.style.display = "none";
            b.removeEventListener("click", setupPlaceCruiser);
        }
    }
}
function placeCruiser(evt){
    let d = evt.target;
    if(d.style.backgroundColor == ''){
        if(playerNum != 5){
            d.style.backgroundColor = 'green';
            playerNum--;
            playerShips[d.id] = 1;
        }
        
        if(playerNum == 5){
            let b = document.getElementById("startGameBtn");
            b.style.display = "initial";
            b.addEventListener("click", setupPlaceSub);
            
        }
    }
    else{
        d.style.backgroundColor = '';
        playerNum++;
        playerShips[d.id] = 0;
        if(playerNum > 5){
            let b = document.getElementById("startGameBtn");
            b.style.display = "none";
            b.removeEventListener("click", setupPlaceSub);
        }
    }
}
function placeSub(evt){
    let d = evt.target;
    if(d.style.backgroundColor == ''){
        if(playerNum != 2){
            d.style.backgroundColor = 'green';
            playerNum--;
            playerShips[d.id] = 1;
        }
        
        if(playerNum == 2){
            let b = document.getElementById("startGameBtn");
            b.style.display = "initial";
            b.addEventListener("click", setupPlaceDestroyer);
        }
    }
    else{
        d.style.backgroundColor = '';
        playerNum++;
        playerShips[d.id] = 0;
        if(playerNum > 2){
            let b = document.getElementById("startGameBtn");
            b.style.display = "none";
            b.removeEventListener("click", setupPlaceDestroyer);
        }
    }
}
function placeDestroyer(evt){
    let d = evt.target;
    if(d.style.backgroundColor == ''){
        if(playerNum != 0){
            d.style.backgroundColor = 'green';
            playerNum--;
            playerShips[d.id] = 1;
        }
        
        if(playerNum == 0){
            let b = document.getElementById("startGameBtn");
            b.style.display = "initial";
            b.addEventListener("click", setupBeginGame);
        }
    }
    else{
        d.style.backgroundColor = '';
        playerNum++;
        playerShips[d.id] = 0;
        if(playerNum > 0){
            let b = document.getElementById("startGameBtn");
            b.style.display = "none";
            b.removeEventListener("click", setupBeginGame);
        }
    }
}

//these 4 functions prepare for placement of the next ship
function setupPlaceBattleship(){
    for(let i = 0; i < 100; i++){
        let s = document.getElementsByClassName("square")[i];
        s.removeEventListener("click", placeCarrier);
        if(s.style.backgroundColor == ''){
            s.addEventListener("click", placeBattleship);
        }
    }
    let b = document.getElementById("startGameBtn");
    b.style.display = "none";
    document.getElementById("theH1").innerText = "Place Battleship (4 spaces)";
}
function setupPlaceCruiser(){
    for(let i = 0; i < 100; i++){
        let s = document.getElementsByClassName("square")[i];
        s.removeEventListener("click", placeBattleship);
        if(s.style.backgroundColor == ''){
            s.addEventListener("click", placeCruiser);
        }
    }
    let b = document.getElementById("startGameBtn");
    b.style.display = "none";
    document.getElementById("theH1").innerText = "Place Carrier (3 spaces)";
}
function setupPlaceSub(){
    for(let i = 0; i < 100; i++){
        let s = document.getElementsByClassName("square")[i];
        s.removeEventListener("click", placeCruiser);
        if(s.style.backgroundColor == ''){
            s.addEventListener("click", placeSub);
        }
    }
    let b = document.getElementById("startGameBtn");
    b.style.display = "none";
    document.getElementById("theH1").innerText = "Place Submarine (3 spaces)";
}
function setupPlaceDestroyer(){
    for(let i = 0; i < 100; i++){
        let s = document.getElementsByClassName("square")[i];
        s.removeEventListener("click", placeSub);
        if(s.style.backgroundColor == ''){
            s.addEventListener("click", placeDestroyer);
        }
    }
    let b = document.getElementById("startGameBtn");
    b.style.display = "none";
    b.innerText = "Begin Game";
    document.getElementById("theH1").innerText = "Place Destroyer (2 spaces)";
}

//place enemy ships in opposite corner of player's ships 
function setupBeginGame(){
    playerNum = 17;
    document.getElementById("theH1").innerText = "Your Turn!";
    document.getElementById("theH2").innerText = "Enemy's Board";
    for(let i = 0; i < playerShips.length; i++){
        if(playerShips[i] == 1){
            enemyShips[99-i] = 1;
        }
        document.getElementsByClassName("square")[i].removeEventListener("click", placeDestroyer);
    }
    let b = document.getElementById("startGameBtn");
    b.style.display = "none";
    playersTurn();
}

//show known status of enemy's board to player and allow to take a shot
function playersTurn(){
    document.getElementById("theH1").innerText = "Your Turn!";
    document.getElementById("theH2").innerText = "Enemy's Board";
    for(let i = 0; i < playerGuess.length; i++){
        let square = document.getElementsByClassName("square")[i];
        if(playerGuess[i] == 1){
            square.style.backgroundColor = "red";
            square.removeEventListener("click", checkPlayerShot);
        }
        else if(playerGuess[i] == -1){
            square.style.backgroundColor = "gray";
            square.removeEventListener("click", checkPlayerShot);
        }
        else{
            square.style.backgroundColor = "";
            square.addEventListener("click", checkPlayerShot);
        }
    }
}

//check for hit or miss and if it was game winning shot
function checkPlayerShot(evt){
    let d = evt.target;
    let i = d.id;
    if(enemyShips[i] == 1){
        alert("Hit!");
        playerGuess[i] = 1;
        enemyNum--;
    }
    else{
        alert("Miss!");
        playerGuess[i] = -1;
    }
    if(enemyNum == 0){
        endGame("You won!");
    }
    else{
        playerTurn = false;
        enemysTurn();
    }
}

//show player the status of their own board
//wait to simulate enemy thinking, then take a random shot
//check if hit or miss and if game winning shot
function enemysTurn(){
    for(let i = 0; i < enemyGuess.length; i++){
        let square = document.getElementsByClassName("square")[i];
        if(playerShips[i] == 1){
            square.style.backgroundColor = "green";
        }
        else if(playerShips[i] == -1){
            square.style.backgroundColor = "gray";
        }
        else if(playerShips[i] == 2){
            square.style.backgroundColor = "red";
        }
        else{
            square.style.backgroundColor = "";
        }

    }
    document.getElementById("theH1").innerText = "Their Turn!";
    document.getElementById("theH2").innerText = "Enemy's making a move";
    setTimeout(() => {
        while(true){
            let guess = Math.floor(Math.random() * 100);
            if(enemyGuess[guess] == 0){//guess hasnt been tried already
                if(playerShips[guess] == 1){
                    alert("You've Been Hit!");
                    playerShips[guess] = 2;
                    enemyGuess[guess] = 1;
                    playerNum--;
                    if(playerNum == 0){
                        endGame("You lost...");
                    }
                }
                else{
                    alert("They missed!");
                    playerShips[guess] = -1;
                    enemyGuess[guess] = -1;
                }
                break;
            }
        }
        playerTurn = true;
        playersTurn();
    }, 3000);
}

//simple alert player of end of game
function endGame(s){
    alert(s + " Thanks for playing!");
}

window.onload = function(){
    setupVars();
    setupBoard();
};  
