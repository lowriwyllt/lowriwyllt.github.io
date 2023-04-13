import { Link, useNavigate } from "react-router-dom";

function NACForm({
  setName_1,
  setName_2,
  setSymbol1,
  setSymbol2,
  setFirstSymbol,
  setSymbol,
  symbol1,
  firstSymbol,
}) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setName_1(event.target.children["player1-name"].value);
    setName_2(event.target.children["player2-name"].value);
    // playGame.classNameList.remove("not_displayed");
    // form.classNameList.add("not_displayed");
    if (event.target.children["player1-symbol"].value) {
      setSymbol1(event.target.children["player1-symbol"].value);
    }
    if (event.target.children["player2-symbol"].value) {
      setSymbol2(event.target.children["player2-symbol"].value);
    }
    setFirstSymbol(symbol1);
    setSymbol(firstSymbol);
    navigate("/games/naughtsandcrosses/game");
  };

  return (
    <main>
      <h1>Noughts and Crosses</h1>
      <Link to="/games">back to all games</Link>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="player1-name"> What is player1's name?</label>
        <input id="player1-name" name="player1-name" type="text" required />
        <br />
        <label htmlFor="player1-symbol">What is player1's symbol</label>
        <input id="player1-symbol" name="player1-symbol" type="text" />
        <br />
        <br />
        <label htmlFor="player2-name"> What is player2's name?</label>
        <input id="player2-name" name="player2-name" type="text" required />
        <br />
        <label htmlFor="player2-symbol">What is player2's symbol</label>
        <input id="player2-symbol" name="player2-symbol" type="text" />
        <br />
        <br />
        <button>Play Game!</button>
      </form>
    </main>
  );
}

export default NACForm;
