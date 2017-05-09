import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

class App extends REact.Component {
  render () {
    return (
      <div>
        <Navbar />
        { children }
      </div>
    )
  }
}
