import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/me.jpg'


class App extends Component {
  
  // standart method
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     displayBio: false
  //   }
  //   console.log('component', this)
  //   this.toggleDisplayBio =  this.toggleDisplayBio.bind(this);
  // }
  // toggleDisplayBio() {
  //   this.setState({ displayBio: !this.state.displayBio });
  // }
  // modern method
  state = { displayBio: false }

  toggleDisplayBio = () => {
      this.setState({ displayBio: !this.state.displayBio });
  }

  render () {

    return (
        <div className="wrapper">
          <img src={profile} alt='profile' className='profile'/>
          <h1>Hello everyone!</h1>
          <p>My name is Artyom and I'm a .. who knows who I'm</p>
          <p>I'm studing React and it's my new project.</p>
          {  this.state.displayBio ? (
                <div>
                  <p>I live in Belgorod, Russia.</p>
                  <p>I'm  coding everyday and I want to find a good job. I know javascript and other stuffs.</p>
                  <p>Also I like bicycles and history.</p>
                  <button onClick={this.toggleDisplayBio}>Show less</button>
                </div>
            ) : (
              <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
              </div>
            )
          }
          <Projects />
          <SocialProfiles />
        </div>
        
    
    )
  }
}
export default App;