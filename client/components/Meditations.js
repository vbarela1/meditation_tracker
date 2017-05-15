import React from 'react';
import { connect } from 'react-redux';
import Meditation from './Meditation';

const Meditations = ({ meditations }) => (
  <ul>
    { meditations.map( (t) => {
      return ( <Meditation key={t.id} {...t} />
    })
  }
  </ul>
)

const mapStateToProps = (state) => {
  return { meditations: state.meditations }
}

export default connect(mapStateToProps)(Meditations)
