import React from 'react';
import { connect } from 'react-redux';

const Meditation = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_MEDITATION', id })}
    style= { complete ? { textDecoration: 'line-through' color: 'grey'} : {} }>
      {name}
    </li>
)

export default connect()(Meditation);
