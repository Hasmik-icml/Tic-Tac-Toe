let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let player = "x";
let winer = false;

document.querySelector(".container").onclick = (event) => {
  let move = event.target;
  // move.className == "box" ? move.innerHTML = "0" : "x";

 player = (player === "0") ?  "x" : "0";
   move.innerHTML = "0";
}