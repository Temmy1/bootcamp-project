import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  
  const style = {
    display: 'inline-block',
    margin: 10
  };

  return (
    <>
      <header style={{margin: 50}}>
        <h3 style={style}><Link to="/">Main</Link></h3>
        <h3 style={style}><Link to="/jokes">Jokes</Link></h3>
        <h3 style={style}><Link to="/music-master">MusicMaster</Link></h3>
        <h3 style={style}><Link to="/evens-or-odds">Evens or Odds</Link></h3>
        <h3 style={style}><Link to="/reaction">Reaction</Link></h3>
      </header>
      {children}
    </>
    
  )
}

export default Header;