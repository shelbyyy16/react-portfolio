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
      <div className="NAV">
      <nav style={navStyle}>
        <Link to="/">
          <div className="home-nav">HOME</div>
        </Link>
        <Link to="/about">
          <div className="about-nav">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="projects-nav">PROJECTS</div>
        </Link>
        <Link to="/contact">
          <div className="contact-nav">CONTACT</div>
        </Link>
        <a href="/resume/Shelby-Pagan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-nav">
        RESUME
      </a>
      </nav>
      </div>
    </header>
  );
}

export default Header;