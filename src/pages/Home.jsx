import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");

    const data = await response.json();

    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="home">
      <div className="intro">
        <img src={about.headshot} className="about-img" alt={about.name} />
        <h1>Shelby Pagan</h1>
        <h4>Software Engineer</h4>
        <button>Email Me</button>
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          I have a unique journey that led me from the fast-paced world of
          critical care nursing to the dynamic field of software engineering.
          With a background in both Emergency Room (ER) and Cardiac nursing, I
          honed my skills in high-stakes, life-saving environments. I developed
          a passion for problem-solving, attention to detail, and the ability to stay calm
          under pressure.
          These qualities have been invaluable in my transition to the tech
          industry. The turning point in my journey was when I discovered the
          power of technology to enhance the patient experience and improve
          healthcare systems. I served as the Epic Systems Trainer to my unit
          where I was drawn to the creative and problem-solving aspects of
          software development and web design, which led me to take the leap and
          pursue a Full Stack Software Engineering education at General
          Assembly. My journey is a testament to the idea that career
          transitions are possible with determination and a commitment to
          learning. I'm excited to be a part of the ever-evolving tech world,
          where I can leverage my diverse experiences to create solutions that matter.
        </p>
        <button> <Link to="/projects">PROJECTS</Link></button>
        <button><a href="/resume/Shelby-Pagan-Resume.pdf" target="_blank" rel="noopener noreferrer"> </a>RESUME</button>
      </div>
    </div>
  );
  return about ? loaded() : <h1></h1>;
}

export default About;
