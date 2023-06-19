function MenuButton({ activeNavbar, setActiveNavbar }) {
  const handleClick = () => {
    setActiveNavbar(!activeNavbar);
  };
  return (
    <div className="Navbar__Link Navbar__Link-toggle">
      <img
        className="icon"
        src={window.location.origin + "/images/menu_icon.png"}
        alt="menu icon"
        onClick={handleClick}
      />
      {/* Add an on click to the image, make this change the className to be a string which now includes the toggles */}
    </div>
  );
}

export default MenuButton;
