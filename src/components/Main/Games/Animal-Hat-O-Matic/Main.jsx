import Button from "./Button.jsx";
import Img from "./Img.jsx";
import { useState } from "react";

function AnimalHatOMaticMain() {
  const [hat, setHat] = useState(false);

  return (
    <div className="hatOMatic">
      <Img currentHat={hat} />
      <br />
      <Button setHat={setHat} hat={hat} />
    </div>
  );
}

export default AnimalHatOMaticMain;
