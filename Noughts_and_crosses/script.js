const gridBox = document.querySelectorAll(".game_button");
const resetButton = document.querySelector(".reset_button");
const score_X = document.querySelector("#score_X");
const game = document.querySelector(".game");
const score_O = document.querySelector("#score_O");
const winner_statement = document.querySelector("#winner_statment");
const header_1 = document.querySelector("#symbol1_header");
const header_2 = document.querySelector("#symbol2_header");
const form = document.querySelector("form");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const playGame = document.querySelector("#playGame");

let symbol1 = "🤯";
let symbol2 = "🤪";
let name_1 = "Player1";
let name_2 = "Player2";
let firstSymbol;
let symbol;

form.onsubmit = (event) => {
  event.preventDefault();
  name1.innerText = event.target.children["player1-name"].value;
  name2.innerText = event.target.children["player2-name"].value;
  name_1 = name1.innerText;
  name_2 = name2.innerText;
  playGame.classList.remove("not_displayed");
  form.classList.add("not_displayed");
  if (event.target.children["player1-symbol"].value) {
    symbol1 = event.target.children["player1-symbol"].value;
  }
  if (event.target.children["player2-symbol"].value) {
    symbol2 = event.target.children["player2-symbol"].value;
  }
  header_1.innerText = symbol1;
  header_2.innerText = symbol2;
  firstSymbol = symbol1;
  symbol = firstSymbol;
};

let haveWinner = false;
let squaresFilled = 0;
gridBox.forEach((element) => {
  element.onclick = (event) => {
    if (!element.innerText && !haveWinner) {
      squaresFilled++;
      element.innerText = symbol;
      if (symbol === symbol1) {
        symbol = symbol2;
      } else if (symbol === symbol2) {
        symbol = symbol1;
      }
      checkGame();
    }
  };
});

resetButton.onclick = (event) => {
  if (haveWinner || squaresFilled === 9) {
    gridBox.forEach((element) => {
      element.innerText = "";
      haveWinner = false;
    });
    if (firstSymbol === symbol1) {
      firstSymbol = symbol2;
      symbol = firstSymbol;
    } else if (firstSymbol === symbol2) {
      firstSymbol = symbol1;
      symbol = firstSymbol;
    }
    winner_statement.innerText = "";
    squaresFilled = 0;
    winner_statement.classList.add("not_displayed");
    game.classList.remove("not_displayed");
  }
};

function checkWinner(grid1, grid2, grid3) {
  console.log(squaresFilled);
  if (grid1 != "" && grid1 === grid2 && grid1 === grid3) {
    console.log("Winner");
    haveWinner = true;

    if (grid1 === symbol1) {
      score_X.innerText = +score_X.innerText + 1;
      winner_statement.innerText = `The winner is  ${name_1}!`;
      game.classList.add("not_displayed");
      winner_statement.classList.remove("not_displayed");
    } else if (grid1 === symbol2) {
      score_O.innerText = +score_O.innerText + 1;
      winner_statement.innerText = `The winner is ${name_2}!`;
      game.classList.add("not_displayed");
      winner_statement.classList.remove("not_displayed");
    }
  } else if (squaresFilled === 9) {
    winner_statement.innerText = `It's a draw!`;
    game.classList.add("not_displayed");
    winner_statement.classList.remove("not_displayed");
  }
}

function checkGame() {
  for (let i = 0; i <= 2; i++) {
    checkWinner(
      document.getElementById(`${i}_0`).innerText,
      document.getElementById(`${i}_1`).innerText,
      document.getElementById(`${i}_2`).innerText
    );
    checkWinner(
      document.getElementById(`0_${i}`).innerText,
      document.getElementById(`1_${i}`).innerText,
      document.getElementById(`2_${i}`).innerText
    );
  }
  checkWinner(
    document.getElementById("0_0").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_2").innerText
  );
  checkWinner(
    document.getElementById("0_2").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_0").innerText
  );
}
