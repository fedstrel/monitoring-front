import React from 'react';
import { useContext } from 'react';
import { appContext } from '../../context/appContext';
import './Card.css';

function chooseColor(coef) {
  if (coef < -0.03) {
    return "#0066FF";
  } else {
    if (coef < 0.09 && coef >= -0.03) {
        return "#00FF00";
    } else {
      if (coef < 0.19 && coef >= 0.09) {
        return "#FFFF00";
      } else {
        if (coef < 0.39 && coef >= 0.19) {
          return "#FF6600";
        } else {
          return "#FF0000";
        }
      }
    }
  }
}

const Card = () => {
  const {cardData} = useContext(appContext);
  let coef = (cardData[0] / cardData[1]) - 1;
  let c = {
    color: "",
  };
  c.color = chooseColor(coef);
  return (
    <div className="Card">
      <div className="NumArea">
        <div id="CurEff" style={c}>{cardData[0]}</div>
        <div id="AvgEff">{cardData[1]}</div>
      </div>
    </div>
  );
}

export default Card;
