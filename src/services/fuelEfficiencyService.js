import axios from "axios";
const url = "http://localhost:8080/";

export const fuelEfficiencyService = {
    getAggregatedFuelEfficiencyForPeriod: async (carId, periodStart, periodEnd, aggregateHours) => {
      const res = await axios.put(url + "fuelEfficiency/carId=" + carId, {
        "periodStart": periodStart,
        "periodEnd": periodEnd,
        "aggregateHours": aggregateHours
      });
      return res;
    },
  };