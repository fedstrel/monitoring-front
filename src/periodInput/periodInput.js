import React, { useState } from 'react';
import { fuelEfficiencyService } from '../services/fuelEfficiencyService';

const PeriodInput = ({carId, showDataCallback}) => {
    const placeholder = 'dd.MM.yyyy HH:mm:ss';
    const pattern = new RegExp('[0-3][0-9].[0-1][0-9].[0-9]{4} [0-2][0-9]:[0-5][0-9]:[0-5][0-9]');

    const [periodStart, setPeriodStart] = useState("");
    const [periodEnd, setPeriodEnd] = useState("");
    const [aggregateHours, setAggregateHours] = useState(true);

    function getEfficiencyRecords() {
        console.log(pattern.test(periodStart) && pattern.test(periodEnd));
        if (pattern.test(periodStart) && pattern.test(periodEnd))
            fuelEfficiencyService.getAggregatedFuelEfficiencyForPeriod(carId, periodStart, periodEnd, aggregateHours).then((response) => {
                console.log('call ShowData');
                showDataCallback(response.data);
                console.log('after call ShowData');
            }).catch(() => alert("Liquid Fail"));
    }

    return(
        <div>
            <form>
                <p>Начало <input placeholder={placeholder} onChange={(e) => setPeriodStart(e.target.value)}/></p>
                <p>Конец <input placeholder={placeholder} onChange={(e) => setPeriodEnd(e.target.value)}/></p>
                <p><input type="radio" value="hours" onClick={() => setAggregateHours(true)}></input> По часам</p>
                <p><input type="radio" value="weeks" onClick={() => setAggregateHours(false)}></input> По неделям</p>
                <button onClick={getEfficiencyRecords} type='button'>Анализировать</button>
            </form>
        </div>
    );
}

export default PeriodInput;