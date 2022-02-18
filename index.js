let player = "x";
let winer = false;

document.querySelector(".restart").onclick = () => {
  // window.location.reload();
  player = "x";
  winer = false;
  let moves = document.querySelectorAll(".box");
  moves[0].innerHTML = "";
  moves[1].innerHTML = "";
  moves[2].innerHTML = "";
  moves[3].innerHTML = "";
  moves[4].innerHTML = "";
  moves[5].innerHTML = "";
  moves[6].innerHTML = "";
  moves[7].innerHTML = "";
  moves[8].innerHTML = "";
  document.querySelector(".display-player").innerHTML = `It's ${player}'s turn`;
}

document.querySelector(".container").onclick = (event) => {
  let move = event.target;
  let itsTurn = document.querySelector(".display-player");
  let winerIs;
  if (!winer) { // էս բլոկում false-ի դեպքում կլիկը դեռ աշխատում է, այսինքն հենց true, եղավ ուրեմն հաղթող կա
    if (move.innerHTML === "") { // ու էլ կլիկի ժամանակ չի նկարի դիվի մեջ
      move.innerHTML = player;
      console.log(player);
      winerIs = player;
      player = (player === "0") ? "x" : "0";
      itsTurn.innerHTML = `It's ${player}'s turn`;
    }

    isWon(winerIs);
  }
}



function isWon(winerIs) {
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
    result.innerHTML = `Player ${winerIs} is won`;

    winer = true;
    return;
  }
  if (box4 == box5 && box5 == box6 && box6 !== "") {
    result.innerHTML = `Player ${winerIs} is won`;

    winer = true;
    return;
  }
  if (box7 == box8 && box8 == box9 && box9 !== "") {
    result.innerHTML = `Player ${winerIs} is won`;

    winer = true;
    return;
  }
  if (box1 == box4 && box4 == box7 && box7 !== "") {
    result.innerHTML = `Player ${winerIs} is won`;

    winer = true;
    return;
  }
  if (box2 == box5 && box5 == box8 && box8 !== "") {
    result.innerHTML = `Player ${winerIs} is won`;

    winer = true;
    return;
  }
  if (box3 == box6 && box6 == box9 && box9 !== "") {
    result.innerHTML = `Player ${winerIs} is won`;

    winer = true;
    return;
  }
  if (box3 == box5 && box5 == box7 && box7 !== "") {
    result.innerHTML = `Player ${winerIs} is won`;

    winer = true;
    return;
  }
  if (box1 == box5 && box5 == box9 && box9 !== "") {
    result.innerHTML = `Player ${winerIs} is won`;

    winer = true;
    return;
  }

  // ստուգում ենք ոչ ոքի դեպքը
  let statusNoOnes = false;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i].innerHTML === "") {
      statusNoOnes = false;
      break;
    } else {
      statusNoOnes = true;
    }
  }
  if (statusNoOnes) {
    result.innerHTML = `No One's`;
  }


}