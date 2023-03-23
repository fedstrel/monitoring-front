import { createContext } from "react";

export const appContext = createContext(
    {
        cardData: [],
        curThread: -1,
        paramsData: [{id: -1, data: [0, 0, 0, 0]}]
    }
);