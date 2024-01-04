import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="carousel-container"> 
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="projects">
              <h2>{project.name}</h2>
              <img src={project.image} alt={project.name} className="projects-img" />
              <br></br>
              <p>{project.description}</p>
              <div className="button-container">
                <a href={project.git}>
                  <button>Github</button>
                </a>
                <a href={project.live}>
                  <button>Live Site</button>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return projects ? loaded() : <h1></h1>;
}

export default Projects;