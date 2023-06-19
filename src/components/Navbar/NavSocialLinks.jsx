function NavSocialLinks() {
  return (
    <div className="Navbar__Icons">
      <div className="Navbar__Icon">
        <a
          href="https://www.linkedin.com/in/lowri-gwenllian-roberts/"
          target="_blank"
        >
          <img
            className="icon"
            src={window.location.origin + "/images/LI-In-Bug.png"}
            alt="linkedIn icon"
          />
        </a>
      </div>
      <div className="Navbar__Icon">
        <a href="https://github.com/lowriwyllt" target="_blank">
          <img
            className="icon"
            src={window.location.origin + "/images/github-mark.png"}
            alt="github icon"
          />
        </a>
      </div>
    </div>
  );
}

export default NavSocialLinks;
