import { Link } from "react-router-dom";

function Games() {
  return (
    <main>
      <h1>Games</h1>
      <Link to="/games/naughtsandcrosses/form">Noughts and crosses</Link>
    </main>
  );
}

export default Games;
