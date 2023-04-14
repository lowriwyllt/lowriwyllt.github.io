import { Link } from "react-router-dom";
import Form from "./Form";
import Greeting from "./Greeting";
import { useState } from "react";

function Games() {
  const [name, setName] = useState("");
  return (
    <main>
      <h1>Games</h1>
      <Form setName={setName} />
      <Greeting name={name} />
      {/* <Link to="/games/naughtsandcrosses/form">Noughts and crosses</Link> */}
      <Link to="/games/animalhatomatic">Animal-Hat-O-Matic</Link>
    </main>
  );
}

export default Games;
