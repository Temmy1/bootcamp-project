import React, { Component } from 'react';
import PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
  render() {

    const { title, link, image } = this.props.profile;

    return (
      <div style={{margin: 10}}>
        <a href={link} target='_blank' rel='noopener noreferrer'><img src={image} alt={title} style={{ width: 30, height: 30}}/></a>
      </div>
    )
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        {PROFILES.map(PROFILE => {
          return (
            <SocialProfile key={PROFILE.id} profile={PROFILE} />
          )
        })}
      </div>
    )
  }
}
export default SocialProfiles;