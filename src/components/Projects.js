import React from 'react';
import PROJECTS from '../data/projects';

const Project = props  => {
 
  const { title, image, description, link } = props.project;

  return (
    <div style={{ margin: 20, flex: '0 1 20%' }}>
      <h3>{title}</h3>
      <img src={image} alt='profile' style={{ width: 200, height: 120 }}/>
      <p>{description}</p>
      <a href={link} target='_blank' rel='noopener noreferrer'>{link}</a>
    </div>
  )
  
}

const Projects = () => (
  <div>
    <h2>Highlighted projects</h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {
        PROJECTS.map(PROJECT => (
          <Project key={PROJECT.id} project={PROJECT}/>
          )
        )
      }
    </div>
  </div>
)
export default Projects;