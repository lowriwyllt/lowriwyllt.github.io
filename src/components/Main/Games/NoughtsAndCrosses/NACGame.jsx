import { useState } from "react";

function NACGame({ symbol1, symbol2, name_1, name_2, symbol }) {
  const [haveWinner, setHaveWinner] = useState(false);
  const [squaresFilled, setSquaresFilled] = useState(0);
  const [resultObj, setResultObj] = useState({});

  const handleClick = (event) => {
    const obj = { ...resultObj };
    obj[event.target.id] = symbol;
    setResultObj({ ...obj });
    console.log(resultObj);
    // if (!this.innerText && !haveWinner) {
    //   squaresFilled++;
    //   this.innerText = symbol;
    //   if (symbol === symbol1) {
    //     symbol = symbol2;
    //   } else if (symbol === symbol2) {
    //     symbol = symbol1;
    //   }
    //   // checkGame();
    // }
  };

  return (
    <div>
      <div className="not_displayed" id="playGame">
        <table className="game">
          <tbody>
            <tr>
              <td>
                <button
                  className="game_button"
                  id="0_0"
                  onClick={handleClick}
                ></button>
              </td>
              <td>
                <button className="game_button" id="0_1"></button>
              </td>
              <td>
                <button className="game_button" id="0_2"></button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="game_button" id="1_0"></button>
              </td>
              <td>
                <button className="game_button" id="1_1"></button>
              </td>
              <td>
                <button className="game_button" id="1_2"></button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="game_button" id="2_0"></button>
              </td>
              <td>
                <button className="game_button" id="2_1"></button>
              </td>
              <td>
                <button className="game_button" id="2_2"></button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="center">
          <button className="reset_button">Reset</button>
        </div>
      </div>
      <table className="scores">
        <thead>
          <tr>
            <th id="name1">{name_1}</th>
            <th id="name2">{name_2}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th id="symbol1_header">{symbol1}</th>
            <th id="symbol2_header">{symbol2}</th>
          </tr>
          <tr>
            <td id="score_X">0</td>
            <td id="score_O">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// function checkGame() {
//   for (let i = 0; i <= 2; i++) {
//     checkWinner(
//       document.getElementById(`${i}_0`).innerText,
//       document.getElementById(`${i}_1`).innerText,
//       document.getElementById(`${i}_2`).innerText
//     );
//     checkWinner(
//       document.getElementById(`0_${i}`).innerText,
//       document.getElementById(`1_${i}`).innerText,
//       document.getElementById(`2_${i}`).innerText
//     );
//   }
//   checkWinner(
//     document.getElementById("0_0").innerText,
//     document.getElementById("1_1").innerText,
//     document.getElementById("2_2").innerText
//   );
//   checkWinner(
//     document.getElementById("0_2").innerText,
//     document.getElementById("1_1").innerText,
//     document.getElementById("2_0").innerText
//   );
// }

// function checkWinner(grid1, grid2, grid3) {
//   console.log(squaresFilled);
//   if (grid1 !== "" && grid1 === grid2 && grid1 === grid3) {
//     console.log("Winner");
//     haveWinner = true;

//     if (grid1 === symbol1) {
//       score_X.innerText = +score_X.innerText + 1;
//       winner_statement.innerText = `The winner is  ${name_1}!`;
//       game.classList.add("not_displayed");
//       winner_statement.classList.remove("not_displayed");
//     } else if (grid1 === symbol2) {
//       score_O.innerText = +score_O.innerText + 1;
//       winner_statement.innerText = `The winner is ${name_2}!`;
//       game.classList.add("not_displayed");
//       winner_statement.classList.remove("not_displayed");
//     }
//   } else if (squaresFilled === 9) {
//     winner_statement.innerText = `It's a draw!`;
//     game.classList.add("not_displayed");
//     winner_statement.classList.remove("not_displayed");
//   }
// }
export default NACGame;
