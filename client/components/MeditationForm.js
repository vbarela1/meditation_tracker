import React from 'react';
import { connect } from 'react-redux';

const MeditationForm = ({ dispatch }) => {
 let input;

 return (
   <div>
     <h3>Add Meditation Log</h3>
     <form
       onSubmit={ e => {
         e.preventDefault();
         dispatch({ type: 'ADD_MEDITATION', todo: input.value })
         input.value = null;
       }}
     >
      <input ref={ n => input = n } />
     </form>
    </div>
  )
}

export default connect()(MeditationForm);
