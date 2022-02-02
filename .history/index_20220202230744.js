
let player = "x";
let winer = false;

document.querySelector(".container").onclick = (event) => {

  let move = event.target;

  player = (player === "0") ? "x" : "0";
  move.innerHTML = player;
  
  isWon();
}

function isWon(){
  let result = document.querySelector(".display-player");
  let moves = document.querySelectorAll(".box");

  if(moves[0].innerHTML == moves[1].innerHTML && moves[1].innerHTML == moves[2].innerHTML){
    result.innerHTML = `Player ${player} is won`;
    break;
  }
}