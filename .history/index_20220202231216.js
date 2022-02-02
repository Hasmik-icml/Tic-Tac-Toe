let player = "x";
let winer = false;

document.querySelector(".container").onclick = (event) => {
  let itsTurn = document.querySelector(".display-player");
  let move = event.target;
  
  itsTurn.innerHTML = `It's ${player} turn`; 

  player = (player === "0") ? "x" : "0"; 
  move.innerHTML = player;

  isWon();// յուրաքանչյուր քայլին ստուգում է
}




function isWon() {
  let result = document.querySelector(".display-player");
  let moves = document.querySelectorAll(".box");

  if (moves[0].innerHTML == moves[1].innerHTML && moves[1].innerHTML == moves[2].innerHTML) {
    result.innerHTML = `Player ${player} is won`;
    // break;
  }
}