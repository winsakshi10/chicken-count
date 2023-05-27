import React from 'react';
import { useLocation } from 'react-router-dom';

const ChickenEaten = () => {

    const location = useLocation();
  const totalValues = location.state?.totalValues || [];
  
  let chickenCount = totalValues.reduce((acc, val) => acc + val,0);

  return (
    <div>
      <h1> You have eaten {chickenCount} Chickens in your lifetime.</h1>
    </div>
  );
};

const TotalValuesContext = React.createContext([]);

export default ChickenEaten;
