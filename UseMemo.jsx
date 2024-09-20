import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [value, setValue] = useState(0);

    const useMemoData = useMemo(() => {
      console.log('useMemo is working ...');
      return value * 5;
    },[value])

    const handleValue = (val) => {
      console.log("Valus is ",val);
      console.log(typeof(val));
      const intValue = Number(val);
      console.log(typeof(intValue));
      setValue(intValue);
    }

    // function handle2(e) {
    //   e.preventDefault();
    //   setValue(e.target.value)
    // }


  return (
    <>
    <center>
      <h2>UseMemoData = {useMemoData}</h2>
      <input type='number' placeholder='Enter Value = ' onChange={(e)=> handleValue(e.target.value)}/>

      {/* <input type='number' placeholder='ener value'  onChange={handle2}/>   */}
      
      </center>
    </>
  )
}

export default UseMemo