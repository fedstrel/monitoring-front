import { useState } from 'react';
import React from 'react';

import './App.css';

import DropDownList from './components/dropDownList/dropDownList';
import PeriodInput from './periodInput/periodInput';

const App = () => {
  const [carId, setCarId] = useState();
  const [tableContent, setTableContent] = useState([]);

  function showData(data) {
    let tmpEffData = [];

    console.log("I am alive");
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      tmpEffData.push(<tr key={i}>
        <td>{data[i].periodStart}</td>
        <td>{data[i].efficiency}</td>
        </tr>);
    }

    setTableContent(tmpEffData);
  }

  return (
    <div>
      <DropDownList onChangeCallback={setCarId}/>
      <PeriodInput carId={carId} showDataCallback={showData}/>
      <table className='TableStyle'>
        <tbody>
          {tableContent}
        </tbody>
      </table>
    </div>
  );
}

// const App = () => {
//   const [cardData, setCardData] = useState([9.6, 9.8]);
//   const [curThread, setCurThread] = useState(-1);
//   const [paramsData, setParamsData] = useState([{id: -1, data: [0, 0, 0, 0]}]);

//   let pointer = 0;
//   console.log(pointer);
//   while (paramsData[pointer].id != curThread) {
//     console.log(pointer);
//     pointer++;
//   }
//   console.log(paramsData[pointer]);

//   return (
//     <div className="App">
//       <appContext.Provider value={{cardData, setCardData, curThread, setCurThread, paramsData, setParamsData}}>
//         <div className="BarLayout">
//           <Bar name="Скорость" paramId={0} lowerBound={0} upperBound={100} step={1} initialValue={paramsData[pointer].data[0]}/>
//           <Bar name="Уклон" paramId={1} lowerBound={-20} upperBound={20} step={5} initialValue={paramsData[pointer].data[1]}/>
//           <Bar name="Измерений в сек." paramId={2} lowerBound={0} upperBound={100} step={5} initialValue={paramsData[pointer].data[2]}/>
//           <Bar name="Частота поворотов" paramId={3} lowerBound={0} upperBound={100} step={5} initialValue={paramsData[pointer].data[3]}/>
//         </div>
//         <Card/>
//         <MiniCardBar/>
//       </appContext.Provider>
//     </div>   
//   );
// }

export default App;
