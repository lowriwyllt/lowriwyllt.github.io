import Button from "./Button.jsx";
import Img from "./Img.jsx";
import { useState } from "react";

function AnimalHatOMaticMain() {
  const [hat, setHat] = useState(true);
  console.log("main:", hat);
  return (
    <div>
      <Img currentHat={hat} />
      <Button setHat={setHat} hat={hat} />
    </div>
  );
}

export default AnimalHatOMaticMain;
