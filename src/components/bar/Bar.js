import { useEffect } from 'react';
import NumericUpDown from '../numeric_up_down/NumericUpDown';
import './Bar.css';

const Bar = ({name, paramId, lowerBound, upperBound, step, initialValue}) => {

  return (
    <div className="Bar">
      <div className="ParameterName">{name}</div>
      <NumericUpDown  paramId={paramId}
                      lowerBound={lowerBound} 
                      upperBound={upperBound}
                      step={step}
                      initialValue={initialValue}/>
    </div>
  );
}

export default Bar;
