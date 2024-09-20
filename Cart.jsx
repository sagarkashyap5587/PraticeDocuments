import React, { useEffect, useState } from 'react'
import "./CSS/Cart.css";
import { Link, useParams } from 'react-router-dom';
import { Data } from './ApiData';
import { useContext, createContext } from 'react';
import { CiStar } from "react-icons/ci";
import { data2 } from './Project2Router';

let star = [];
for (var i = 0; i < 4; i++) {
    star.push(<CiStar />)
}

const Cart = () => {
    const { item, setItem } = useContext(data2);
    const [quantity, setQuantity] = useState(1);

    const addToCart = (product) => {
        alert("Item added to cart Successfully")
        const existingItem = item.find((item) => item.id === product.id);
        if (existingItem) {
            setItem(item.map((cartItems) => cartItems.id === product.id ? { ...cartItems, quantity: cartItems.quantity + product.quantity } : cartItems));
        } else {
            setItem([...item, { ...product, quantity }]);
        }
    }

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    }

    const dataItem = useContext(Data);
    const { id } = useParams();
    const itemFix1 = dataItem.filter(item => item.id === Number(id));
    const dataFetch = useContext(Data)
    const itemsFetch = dataFetch.slice(0, 3);
    return (
        <>
            <div className='cart1'>
                <div className='cart-flex'>
                    {
                        itemFix1.map(item => {
                            return (
                                <>
                                    <div className='img-hid' key={item.id}><img src={item.image} /></div>
                                    <div className='cart-text1'>
                                        <h1>{item.product_name}</h1>
                                        <h2>{item.dollar}<span> + Free Shipping</span></h2>
                                        <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                                        <input type='number' value={quantity} min="1" onChange={handleQuantityChange} />
                                        <button onClick={() => addToCart({ ...item, quantity })}>Add To Cart</button>
                                        <div className='cart-grayline'></div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='cart-grayline2'></div>
                <div className='descrip'>
                    <Link className='t-decor'><h1>Description</h1></Link>
                    <Link className='t-decor'><h1>Reviews</h1></Link>
                </div>
                <p className='cart-pp'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                <h1 className='cart-related-h1'>Related Products</h1>
                <div className='cart-related-products'>
                    {
                        itemsFetch.map((item, index) => {
                            return (
                                <>
                                    <Link to={`/cart/${item.id}`} key={index} className='cart-image-data'>
                                        <img src={item.image} />
                                        <p className='cart-p1'>{item.type}</p>
                                        <p className='cart-p2'>{item.product_name}</p>
                                        <p className='cart-p3'>{star}</p>
                                        <p className='cart-p4'>{item.dollar}</p>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}



export default Cart