import React, { useMemo, useState } from 'react'

const expensiveCalculation = (num) => {
    console.log("Use Expensive Calculation ...");
    for(var i=0;i<=10;i++) {
        num+=i;
    }
    return num;
}


// If we can use the usememo so it can not re-render

const Constpp = ({num}) => {
    const calculation = useMemo(() => expensiveCalculation(num),[num]);
    return (
        <>
        <h3>Calcution:{calculation}</h3>
        </>
    )
}

// But this below function is use so it can re-render again and again;

// const Constpp = ({num}) => {
//     const calculation = expensiveCalculation(num);
//     return (
//                 <>
//                 <h3>Calcution:{calculation}</h3>
//                 </>
//             )
// }


const PP = () => {
    const [number, setnumber] = useState(15);
    const[count,setcount] = useState(0);
  return (
    <>
        <Constpp num={number}></Constpp>
        <button onClick={()=>setnumber(number+1)}>NumberIncremen</button><br/>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>CountFunction</button>
    
    </>
  )
}

export default PP