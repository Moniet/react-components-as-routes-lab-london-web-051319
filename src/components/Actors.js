import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {actors.map(a => <h4>{a.name}</h4>)}
    </div>
  );
};

export default Actors;
