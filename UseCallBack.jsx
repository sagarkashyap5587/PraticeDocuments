import React, { useCallback,  useMemo,  useState } from 'react'
import GetUseCallBack from './GetUseCallBack';

const UseCallBack = () => {

  const [count, setcount] = useState(0);
  const [item, setitem] = useState(['item1', 'item2']);

  const addToCart = useCallback(() => {
    alert("Add to cart is working...");
    console.log("Add to cart working .... in Console");
    setitem([...item, 'New Item Added']);
  }, [item])


  // const addToCart = () => {
  //     alert("Add to cart is working...");
  //     console.log("Add to cart working .... in Console");
  //     setitem([...item, 'New Item Added']);
  // }

  console.log("Parent always working ...");

  const handleCount = () => {
    setcount(lastcount => lastcount + 1);
    console.log("Last count is working...")
  }

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>HandleCount</button>
      <GetUseCallBack addToCart={addToCart} propsItem={item} />
    </>
  )
}

export default UseCallBack