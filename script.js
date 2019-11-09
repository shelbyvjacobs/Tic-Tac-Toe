// Pseudocode

// 	create a variable for each box
const gameBoard = document.querySelector("#gameBoard");
const boxes = document.querySelectorAll(".box");
const A1 = document.querySelector("#A1");
const A2 = document.querySelector("#A2");
const A3 = document.querySelector("#A3");
const B1 = document.querySelector("#B1");
const B2 = document.querySelector("#B2");
const B3 = document.querySelector("#B3");
const C1 = document.querySelector("#C1");
const C2 = document.querySelector("#C2");
const C3 = document.querySelector("#C3");
const turnSpan = document.querySelector("#turnSpan");
let turn = document.querySelector("#turn");
let winner = document.querySelector("h2");
const button = document.querySelector("button");
let redOrBlue = 0;

// console.log(boxes);

//determine all scenarios; conditional statement
function determineWinner () {
	if (
		(A1.style.backgroundColor == "red" && A2.style.backgroundColor == "red" && A3.style.backgroundColor == "red")||
		(B1.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && B3.style.backgroundColor == "red")||
		(C1.style.backgroundColor == "red" && C2.style.backgroundColor == "red" && C3.style.backgroundColor == "red")||
		(A1.style.backgroundColor == "red" && B1.style.backgroundColor == "red" && C1.style.backgroundColor == "red")||
		(A2.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && C2.style.backgroundColor == "red")||
		(A3.style.backgroundColor == "red" && B3.style.backgroundColor == "red" && C3.style.backgroundColor == "red")||
		(A1.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && C3.style.backgroundColor == "red")||
		(A3.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && C1.style.backgroundColor == "red")
	){
		winner.innerText = "RED TEAM WINS!";
		turn.style.display = "none";
	} else if (
		(A1.style.backgroundColor == "blue" && A2.style.backgroundColor == "blue" && A3.style.backgroundColor == "blue")||
		(B1.style.backgroundColor == "blue" && B2.style.backgroundColor == "blue" && B3.style.backgroundColor == "blue")||
		(C1.style.backgroundColor == "blue" && C2.style.backgroundColor == "blue" && C3.style.backgroundColor == "blue")||
		(A1.style.backgroundColor == "blue" && B1.style.backgroundColor == "blue" && C1.style.backgroundColor == "blue")||
		(A2.style.backgroundColor == "blue" && B2.style.backgroundColor == "blue" && C2.style.backgroundColor == "blue")||
		(A3.style.backgroundColor == "blue" && B3.style.backgroundColor == "blue" && C3.style.backgroundColor == "blue")||
		(A1.style.backgroundColor == "blue" && B2.style.backgroundColor == "blue" && C3.style.backgroundColor == "blue")||
		(A3.style.backgroundColor == "blue" && B2.style.backgroundColor == "blue" && C1.style.backgroundColor == "blue")
	){ 
		winner.innerText = "BLUE TEAM WINS!";
		turn.style.display = "none";
	} else if ( //this isn't working; logs every time a tile is clicked
		A1.style.backgroundColor !== "" &&
		A2.style.backgroundColor !== "" &&
		A3.style.backgroundColor !== "" &&
		B1.style.backgroundColor !== "" &&
		B2.style.backgroundColor !== "" &&
		B3.style.backgroundColor !== "" &&
		C1.style.backgroundColor !== "" &&
		C2.style.backgroundColor !== "" &&
		C3.style.backgroundColor !== ""
	){
		winner.innerText = "It's a tie!";
		turn.style.display = "none";
		console.log("It's a tie!")
	} else {
		console.log("Keep Playing!")
	}
};

//eventlisteners & determine if it's red or blue; don't change background once selected
for (let i=0; i<boxes.length; i++){
	boxes[i].addEventListener("click", setBackground);
	function setBackground (evt){
		evt.preventDefault();
		if (redOrBlue%2 === 0){
			this.style.backgroundColor = "red";
			determineWinner();
			redOrBlue = redOrBlue +=1;
			turn.innerText = "Blue team's turn.";
			evt.target.removeEventListener("click", setBackground);
			console.log("clicked!")
		} else {
			this.style.backgroundColor = "blue";
			determineWinner();
			redOrBlue = redOrBlue +=1;
			turn.innerText = "Red team's turn.";
			evt.target.removeEventListener("click", setBackground);
			console.log("clicked!")
		} 
	}
};

// reset (play again) button
for (let i=0; i<boxes.length; i++){
	button.addEventListener("click", function(evt){
		evt.preventDefault();
		location.reload();
	})
};


