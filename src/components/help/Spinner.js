import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className="spinner">
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '300px', margin: 'auto', display: 'block' }} />
    </div>
  )
}

export default Spinner;