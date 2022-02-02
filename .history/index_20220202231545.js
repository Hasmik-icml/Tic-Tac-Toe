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
  let box1 = moves[0].innerHTML;
  let box2 = moves[1].innerHTML;
  let box3 = moves[2].innerHTML;
  let box4 = moves[3].innerHTML;
  let box5 = moves[4].innerHTML;
  let box6 = moves[5].innerHTML;
  let box7 = moves[6].innerHTML;
  let box8 = moves[7].innerHTML;
  let box9 = moves[8].innerHTML;

  if (box1 == box2 && box {
    result.innerHTML = `Player ${player} is won`;
    return;
  }
  
}