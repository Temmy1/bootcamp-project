import React, { Component } from 'react';

const TITLES = [
  'an aspiring developer',
  'a bicycle lover',
  'an eternal student',
  'an art and history lover'
];

class Title extends Component {
  state = { titleIndex: 0 };



  componentDidMount() {
    this.animateTitles();
  }
  componentWillUnmount()  {
    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(
      () => {
        const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
        this.setState({ titleIndex });
      }, 5000);
      console.log('this.titleInterval', this.titleInterval );
  }
  render() {
    const title = TITLES[this.state.titleIndex];


    return (
      <p>I am {title}</p>
    )
  }
}
export default Title;