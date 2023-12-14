import { useState, useEffect } from "react";

function About() {

  const [about, setAbout] = useState(null);


  const getAboutData = async () => {

    const response = await fetch("./about.json");

    const data = await response.json();

    setAbout(data);
  };

  
  useEffect(() =>  {
    getAboutData() 
   }, []);


  const loaded = () => (
    <div className="about">
    <img src={about.headshot} className="about-img" alt={about.name} />
    <div className="about-me">
      <h2>Here is a little about me.</h2>
      <p>{about.bio}<span className="highlight"></span></p>
    </div>
  </div>
  );
  return about ? loaded() : <h1></h1>;
}

export default About;