let player = "x";
let winer = false;

document.querySelector(".container").onclick = (event) => {
  let itsTurn = document.querySelector(".display-player");
  let move = event.target;
  
  itsTurn.innerHTML = `It's ${player} turn`; 

  player = (player === "0") ? "x" : "0"; 
  move.innerHTML = player;

  isWon();
}




function isWon() {
  let result = document.querySelector(".display-player");
  let moves = document.querySelectorAll(".box");
  let box1 = moves[0];
  let box2 = moves[1];
  let box3 = moves[2];
  let box4 = moves[3];
  let box5 = moves[4];
  let box6 = moves[5];
  let box7 = moves[6];
  let box8 = moves[7];
  let box9 = moves[8];

  if (box1 == moves[1].innerHTML && moves[1].innerHTML == moves[2].innerHTML) {
    result.innerHTML = `Player ${player} is won`;
    return;
  }
  
}