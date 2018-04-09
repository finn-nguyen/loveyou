import React, { Component } from 'react';
import './Home.css';
import NavBar from '../NavBar'
import Content from '../Content'

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default Home;
