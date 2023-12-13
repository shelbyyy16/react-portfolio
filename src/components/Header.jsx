import { Link } from "react-router-dom";

function Header() {

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "100%",
    margin: "auto",
  };
  
  return (
    <header>
      <div className="NAV">
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        <Link to="/resume">
          <div>RESUME</div>
        </Link>
      </nav>
      </div>
    </header>
  );
}

export default Header;