import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
  render() {

    const { title, image, description, link } = this.props.project;

    return (
      <div style={{ margin: 20, flex: '0 1 20%' }}>
        <h3>{title}</h3>
        <img src={image} alt='profile' style={{ width: 200, height: 120 }}/>
        <p>{description}</p>
        <a href={link} target='_blank' rel='noopener noreferrer'>{link}</a>
      </div>
    )
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlited projects</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          {
            PROJECTS.map(PROJECT => {
              return (
              <Project key={PROJECT.id} project={PROJECT}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Projects;