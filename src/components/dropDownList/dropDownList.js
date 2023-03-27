import React, { useState } from 'react';
import { carService } from "../../services/carService";

const DropDownList = ({onChangeCallback}) => {
    const [options, setOptions] = useState([]);

    function getOptions() {   
        carService.getAllCars().then((carIds) => {
            let tmpOpt = []
            for (let i = 0; i < carIds.data.length; i++) {
                tmpOpt.push(<option key={i} value={carIds.data[i]}>{carIds.data[i]}</option>);
            }
            setOptions(tmpOpt);
        });
        return options;
    }

    function change(event) {
        onChangeCallback(event.target.value);
    }

    return (
        <div>
            <select onChange={change}>
                {getOptions()}
            </select>
        </div>
    );
}

export default DropDownList;