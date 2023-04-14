function Greeting({ name }) {
  let greetingStr =
    "Welcome to the most fun page on this website. Here you can find all of the mini apps and games that I have created using react. Have fun!";
  if (name) {
    greetingStr = `Hello, ${name} and welcome to the most fun page on this website. Here you can find all of the mini apps and games that I have created using react. Have fun!`;
  }
  return <p>{greetingStr}</p>;
}

export default Greeting;
