import React, { useState } from 'react'

const ReactMemoComponents = React.memo(({ count }) => {
    console.log("reactMemoComponents is working ...")
    return (
        <>
            <h1>Count: {count}</h1>
        </>
    )
})

const ReactMemo = () => {
    const [count, setcount] = useState(0);
    const [count2, setcount2] = useState(0);

    console.log("Parent always working ...")

    const handleClick = () => {
        setcount(previousCount => previousCount + 1)
    }

    const updatedCount2 = () => {
        console.log("UpdatedCount2 is working ...");
        setcount2(previousCount => previousCount + 1)
    }

    return (
        <>
            <h1><ReactMemoComponents count={count} /></h1>
            <button onClick={handleClick}>Count1</button><br />
            <h3>Count2: = {count2}</h3>
            <button onClick={updatedCount2}>Count2</button>
        </>
    )
}

export default ReactMemo