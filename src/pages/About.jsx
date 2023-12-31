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
      <p>I have a unique journey that led me from the fast-paced world of critical care nursing to the dynamic field of software engineering. With a background in both Emergency Room (ER) and Cardiac nursing, I honed my skills in high-stakes, life-saving environments. I developed a passion for <span className="highlight">problem-solving, attention to detail, and the ability to stay calm under pressure.</span> These qualities have been invaluable in my transition to the tech industry. The turning point in my journey was when I discovered the power of technology to enhance the patient experience and improve healthcare systems. I served as the Epic Systems Trainer to my unit where I was drawn to the creative and problem-solving aspects of software development and web design, which led me to take the leap and pursue a Full Stack Software Engineering education at General Assembly. My journey is a testament to the idea that career transitions are possible with determination and a commitment to learning. I'm excited to be a part of the ever-evolving tech world, where I can leverage my diverse experiences to <span className="highlight">create solutions that matter.</span> In my (very limited) free time I am passionate about reading, trying new recipes and trying to keep my house plants alive.🌱</p>
    </div>
  </div>
  );
  return about ? loaded() : <h1></h1>;
}

export default About;