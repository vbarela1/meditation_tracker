import React from 'react';
import { connect } from 'react-redux';
import Meditation from './Meditation';

const filtered = (todos, filter) => {
  switch (filter) {
    case 'All':
      return meditations;
    case 'Active':
      return meditations.filter( t => !t.complete)
    case 'Completed':
      return meditations.filter( t => t.complete)
  }
}
const Meditations = ({ meditations, filter }) => (
  <ul>
    { filtered(meditations, filter).map( (t) => {
      return ( <Meditation key={t.id} {...t} />
    })
  }
  </ul>
)

const mapStateToProps = (state) => {
  return { meditations: state.meditations, filter: state.filter }
}

export default connect(mapStateToProps)(Meditations)
