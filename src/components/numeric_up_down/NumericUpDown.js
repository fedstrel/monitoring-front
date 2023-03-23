import { useContext, useEffect, useState } from 'react';
import { appContext } from '../../context/appContext';
import './NumericUpDown.css';

const NumericUpDown = ({paramId, lowerBound, upperBound, step, initialValue}) => {   
    const [currentValue, setCurrentValue] = useState();
    const {curThreadId, paramsData, setParamsData} = useContext(appContext);

    if (currentValue == undefined)
        setCurrentValue(initialValue);      

    function plusStep() {
        if (currentValue + step <= upperBound) {
            setCurrentValue(currentValue - -step);
            setContextParams();
        }
    }

    function minusStep() {
        if (currentValue - step >= lowerBound) {
            setCurrentValue(currentValue - step);
            setContextParams();
        }
    }

    function setContextParams() {
        let data = paramsData;
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === curThreadId) {
                    data[i].paramsData[paramId] = currentValue;
                    setParamsData(data);
                    return;
                }
            }
    }

    return (
    <div className="NumericUpDown">
        <div className="ValueZone">{currentValue}</div>
        <div className="ButtonArea">
        <button className="ButtonStyle" onClick={() => plusStep()}>/\</ button>
        <button className="ButtonStyle" onClick={() => minusStep()}>\/</ button>
        </div>
    </div>
    );
}

export default NumericUpDown;