import React from 'react';
import Chef from './Chef';


const chefNames = ['Gordon_Ramsay', 'Jamie_Oliver', 'Nigella_Lawson'];

const ChefsArea = () => {

  const chefs = chefNames.map(name => {
    return <Chef chefName={name} />;
  })

  return chefs;
};

export default ChefsArea;