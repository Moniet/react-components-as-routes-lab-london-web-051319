import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {directors.map(d =>
        <h4>{ d.name }</h4>
      )}
    </div>
  );
}

export default Directors
