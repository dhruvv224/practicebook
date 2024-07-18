import React,{ createContext,useContext,useState} from "react";
export const Context=createContext();
export const ContexProvder=({children})=>{
    const[Task,setTask]=useState([])
    return
    (
        <Context.Provider value={{Task,setTask}}>
            {children}
        </Context.Provider>
    )
}