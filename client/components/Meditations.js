import React from 'react';
import { connect } from 'react-redux';

const Meditations = ({ meditations }) => (
  <ul>
    { meditations.map( (t) => {
      return (
        <li key={t.id}>
          {t.name}
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
