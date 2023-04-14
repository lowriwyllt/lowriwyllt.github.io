function Img({ currentHat }) {
  if (currentHat === true) {
    return (
      <img src="images/horse_hat.png" alt="horse with a party hat on"></img>
    );
  } else {
    return (
      <img
        src="images/horse_no_hat.png"
        alt="horse without a party hat on"
      ></img>
    );
  }
}

export default Img;
