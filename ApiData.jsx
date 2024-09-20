import React, {  createContext, useEffect, useState } from 'react'
import mock from './mock.json';

const Data = createContext([]);

const ApiData = ({children}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(mock);
    },[])
  return (
    <>
    <Data.Provider value={item}>
        {children}
    </Data.Provider>
    
    </>
  )
}

export {Data};

export default ApiData