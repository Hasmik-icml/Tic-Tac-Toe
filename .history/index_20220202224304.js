let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let player = "x";
let winer = false;

document.querySelector(".container").onclick = (event) => {
  let move = event.target;
console.log(move);
  move.className = "box" ? move.innerHTML = "0" : "x";
  
}