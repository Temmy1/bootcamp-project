import React from 'react';
import PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
 
  const { title, link, image } = props.profile;

  return (
    <div style={{margin: 10}}>
      <a href={link} target='_blank' rel='noopener noreferrer'><img src={image} alt={title} style={{ width: 30, height: 30}}/></a>
    </div>
  )
}

const SocialProfiles = () => (

  <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
    {PROFILES.map(PROFILE => (
        <SocialProfile key={PROFILE.id} profile={PROFILE} />
      )
    )}
  </div>

)
export default SocialProfiles;