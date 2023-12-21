import { Link } from "react-router-dom";

function Header() {

  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
    padding: ".5rem",
    width: "100%",
    margin: "auto",
  };
  
  return (
    <header>
      <div className="NAV" style={navStyle}>
        <div className="home-nav">HOME</div>
        <div className="about-nav">ABOUT</div>
        <div className="projects-nav">PROJECTS</div>
        <div className="contact-nav">CONTACT</div>
        <a
          href="/resume/Shelby-Pagan-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-nav"
        >
          RESUME
        </a>
      </div>
    </header>
  );
}

export default Header;