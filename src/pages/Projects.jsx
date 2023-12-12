import { useState, useEffect } from "react";

function Projects() {

  const [projects, setProjects] = useState(null);


  const getProjectsData = async () => {


    const response = await fetch("./projects.json");


    const data = await response.json();


    setProjects(data);

  };

  
  useEffect(() => {
    getProjectsData() 
  }, []);


  const loaded = () => {
    return (projects.map((project) => (
      <div key={project.id} className="projects">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} className="projects-img"/>
        <br></br>
        <a href={project.git}>
          <button>Github</button>
        </a><a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    
    )));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;