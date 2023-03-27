import axios from "axios";
const url = "http://localhost:8080/";

export const carService = {
  getAllCars: async () => {
    const res = await axios.get(url + "car/allIds");
    return res;
  },
};