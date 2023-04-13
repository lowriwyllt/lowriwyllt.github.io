function NACGame(symbol1, symbol2, name_1, name_2) {
  return (
    <div>
      <div className="not_displayed" id="playGame">
        <table className="game">
          <tbody>
            <tr>
              <td>
                <button className="game_button" id="0_0"></button>
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

export default NACGame;
