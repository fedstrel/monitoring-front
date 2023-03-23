import { useState, useEffect, useContext } from 'react';
import { appContext } from '../../context/appContext';
import MiniCard from '../mini_card/MiniCard';
import './MiniCardBar.css';

const API = "http://localhost:8080/generator/";
const carID = 1;

const MiniCardBar = () => {
  const [miniCards, setMiniCards] = useState([]);
  const {paramsData, setParamsData} = useContext(appContext);
  let styles = [];

  //simulate componentDidMount
  useEffect(() => {
    window.addEventListener("beforeunload", fetch(API + "kill=all", {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/*',
      },
      body: "empty"
    }));
  }, []);

  function addCard(color) {
    let num = styles.length - 1;
    fetch(API + "add=" + carID, 
      {method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/*',
      },
      body: "empty"}).then((response) => {
        response.text().then((ID) => {
          styles.push({backgroundColor: color});
          let tmpData = paramsData;
          tmpData.push({id: Number(ID), data: [60, 5, 1, 15]});
          setParamsData(tmpData);
          console.log(paramsData);
          miniCards.push(
            <MiniCard key={num} 
                threadId={ID}/>
          );
          setMiniCards([...miniCards]);
        })
    }).catch(err => {alert(err)});
    
  }

  // if (miniCards.length === 0) {
  //   for (let i = 0; i < colors.length; i++) {
  //     styles.push({backgroundColor: colors[i],});
  //     miniCards.push(
  //       <div className="MiniCard" style={styles[i]} key={i}>&nbsp;</div>
  //     );
  //   }
  // }

  let plusCard = <button className="MiniCard PlusCard" onClick={() => addCard("#fff")}>+</button>

  return (
    <div className="MiniCardBar">
      {miniCards}
      {plusCard}
    </div>
  );
}

export default MiniCardBar;
