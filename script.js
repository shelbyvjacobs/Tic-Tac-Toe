//Pseudocode
// Define the elements
// 	create a variable for each box
const A1 = document.querySelector("#A1");
const A2 = document.querySelector("#A2");
const A3 = document.querySelector("#A3");
const B1 = document.querySelector("#B1");
const B2 = document.querySelector("#B2");
const B3 = document.querySelector("#B3");
const C1 = document.querySelector("#C1");
const C2 = document.querySelector("#C2");
const C3 = document.querySelector("#C3");
//create variable for each row, column, and diagonal
const column1 = document.querySelectorAll(".column1");
const column2 = document.querySelectorAll(".column2");
const column3 = document.querySelectorAll(".column3");
const row1 = document.querySelectorAll(".row1");
const row2 = document.querySelectorAll(".row2");
const row3 = document.querySelectorAll(".row3");
const diagonalTopLeft = document.querySelectorAll(".diagonalTopLeft");
const diagonalTopRight = document.querySelectorAll(".diagonalTopRight");

// console.log(diagonalTopRight); //returns nodeList
// console.log(column2); //returns nodeList
// console.log(A3);

function determineWinner () {
//determine all scenarios; conditional statement
	if (A1.style.backgroundColor == "red" && A2.style.backgroundColor == "red" && A3.style.backgroundColor == "red"){
		console.log("red team wins!")
	} else if (B1.style.backgroundColor == "red" && B2.style.backgroundColor == "red" && B3.style.backgroundColor == "red"){

	}
};