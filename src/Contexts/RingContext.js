import { createContext, useContext, useState, memo } from "react";
const RingCon = createContext();
const RingProvider = ({ children }) => {
    const [Eg009, setEg009] = useState(2)
    const [Eg012, setEg012] = useState(2)
    const [Eg115, setEg115] = useState(2)
    const [Eg094, setEg094] = useState(2)
    const [Eg074, setEg074] = useState(2)
    const [Eg075, setEg075] = useState(2)
    const [Eg020, setEg020] = useState(2)
    const [Eg022, setEg022] = useState(2)
    const datas = {
        Eg009, setEg009,
        Eg012, setEg012,
        Eg115, setEg115,
        Eg094, setEg094,
        Eg074, setEg074,
        Eg075, setEg075,
        Eg020, setEg020,
        Eg022, setEg022
    }
    return (
        <RingCon.Provider value={datas}>
            {
                children
            }
        </RingCon.Provider>
    )
};
export default memo(RingProvider);
export const useRingCon = () => useContext(RingCon);