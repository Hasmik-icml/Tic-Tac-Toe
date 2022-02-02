let player = "0";
let winer = false;

document.querySelector(".restart").onclick = () => {
  window.location.reload();
}

document.querySelector(".container").onclick = (event) => {
  let move = event.target;
  let itsTurn = document.querySelector(".display-player");

  if (!winer) {
    itsTurn.innerHTML = `It's ${player}'s turn`;

    player = (player === "0") ? "x" : "0";
    if (move.innerHTML === "")
    isWon();
  }
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

  if (box1 == box2 && box2 == box3 && box3 !== "") {
    result.innerHTML = `Player ${player} is won`;
    console.log("stugum2");
    winer = true;
    return;
  }
  if (box4 == box5 && box5 == box6 && box6 !== "") {
    result.innerHTML = `Player ${player} is won`;
    console.log("stugum2");
    winer = true;
    return;
  }
  if (box7 == box8 && box8 == box9 && box9 !== "") {
    result.innerHTML = `Player ${player} is won`;
    console.log("stugum3");
    winer = true;
    return;
  }
  if (box1 == box4 && box4 == box7 && box7 !== "") {
    result.innerHTML = `Player ${player} is won`;
    console.log("stugum4");
    winer = true;
    return;
  }
  if (box2 == box5 && box5 == box8 && box8 !== "") {
    result.innerHTML = `Player ${player} is won`;
    console.log("stugum5");
    winer = true;
    return;
  }
  if (box3 == box6 && box6 == box9 && box9 !== "") {
    result.innerHTML = `Player ${player} is won`;
    console.log("stugum6");
    winer = true;
    return;
  }
  if (box3 == box5 && box5 == box7 && box7 !== "") {
    result.innerHTML = `Player ${player} is won`;
    console.log("stugum7");
    winer = true;
    return;
  }
  if (box1 == box5 && box5 == box9 && box9 !== "") {
    result.innerHTML = `Player ${player} is won`;
    console.log("stugum8");
    winer = true;
    return;
  }

let statusNoOnes =false;
  
  for (let i = 0; i < moves.length; i++) {
    if (moves[i].innerHTML === "") {
      statusNoOnes = false;
      break;
    }else{
      statusNoOnes = true;
    }
  }
  if (statusNoOnes) {
    result.innerHTML = `No One's`;
  }


}