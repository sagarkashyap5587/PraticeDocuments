import React, { memo } from 'react'

const GetUseCallBack = (props) => {
    console.log("11111111111111111111111111111111111111111111111")

    return (
        <>
            {
                props.propsItem.map((item, index) => {
                    return <h2 key={index}>{item}</h2>
                })
            }
            <button onClick={props.addToCart}>AddToCart</button>
        </>
    )
}

export default memo(GetUseCallBack);