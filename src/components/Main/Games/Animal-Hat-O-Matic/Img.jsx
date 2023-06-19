function Img({ currentHat }) {
  if (currentHat === true) {
    return (
      <img
        src={window.location.origin + "/images/horse_hat.png"}
        alt="horse with a party hat on"
      ></img>
    );
  } else {
    return (
      <img
        src={window.location.origin + "/images/horse_no_hat.png"}
        alt="horse without a party hat on"
      ></img>
    );
  }
}

export default Img;
