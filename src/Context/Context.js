
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const MyProvider = ({ children }) => {
    const [Task, setTask] = useState([]);

    return (
        <Context.Provider value={{ Task, setTask }}>
            {children}
        </Context.Provider>
    );
};

export { Context, MyProvider };
