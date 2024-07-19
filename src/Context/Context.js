
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const MyProvider = ({ children }) => {
    const [Task, setTask] = useState([]);

    return (
        <Context.Provider value={{ Task, setTask }}>
            {childreen}
        </Context.Provider>
    );
};

export { Context, MyProvider };
