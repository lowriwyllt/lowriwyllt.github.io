function Button({ setHat, hat }) {
  let buttonStr = "";
  if (hat) {
    buttonStr = "remove hat";
  } else {
    buttonStr = "add hat";
  }
  return (
    <button
      onClick={(event) => {
        setHat((currentHat) => {
          console.log("button:", currentHat);
          return !currentHat;
        });
      }}
    >
      {buttonStr}
    </button>
  );
}

export default Button;
