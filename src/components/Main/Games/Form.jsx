import { useState } from "react";

function Form({ setName }) {
  const [tempName, setTempName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(tempName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Enter your name for a personalised greeting!</p>
      <label htmlFor="name">Name </label>
      <input
        id="name"
        maxLength="50"
        onChange={(event) => setTempName(event.target.value)}
      />{" "}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
