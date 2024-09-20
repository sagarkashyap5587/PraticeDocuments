import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import "./CSS/Navbar.css";
import { data2 } from './Project2Router';


const Navbar = () => {
  const {item} = useContext(data2)
  const [count, setcount] = useState(0);

  useEffect(() => {
    const data = item.reduce((acc, item1) => acc + (item1.dollar1 * item1.quantity),0);
    setcount(data);
  },[item])

  return (
    <>
    <div className='navbar'>
        <div className='logo-image'><Link to={'/'}> <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg'/></Link></div>
        <ul>
            <li><Link className='linkdec' to={'/shop'}>Everything</Link></li>
            <li><Link className='linkdec'  to={'/groceries'}>Groceries</Link></li>
            <li><Link className='linkdec' to={'/juice'}>Juice</Link></li>
            <li className='margin-gap'><Link className='linkdec'>About</Link></li>
            <li><Link className='linkdec'>Contact</Link></li>
            <li><Link className='linkdec'>₹{count}</Link></li>

            <li><Link to={'/bucket'} className='linkdec'><BsCart4/></Link></li>
            <li><Link  className='linkdec' to={'/loginpage'}><FcBusinessman/></Link></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar