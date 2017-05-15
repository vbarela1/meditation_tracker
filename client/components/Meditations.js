import React from 'react';
import { connect } from 'react-redux';

const Meditations = ({ meditations }) => (
  <ul>
    { meditations.map( (t,i) => {
      return (
        <li key={i}>
          {t}
        </li>
      )
    })
  }
  </ul>
)

const mapStateToProps = (state) => {
  return { meditations: state.meditations }
}

export default connect(mapStateToProps)(Meditations)
