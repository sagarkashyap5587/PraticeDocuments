import React, { useContext } from 'react'
import './CSS/Home.css';
import { BsCart4 } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { Data } from './ApiData';


let rating = []
for (var i = 0; i < 4; i++) {
  rating.push(<CiStar />)
}

const HomePage = () => {
  
  const imageData1 = useContext(Data);
  const imageData = imageData1.slice(0, 4);
  const imageData2 = imageData1.slice(4, 8);


  return (
    <>
      <div className='main-background'>
        <div className='main-image'>
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png' />
        </div>
        <div className='main-image2'>
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png' />
          <h3>Best Quality Products</h3>
          <h2>Join the Organic Movement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button><BsCart4 className='arr' /> SHOP NOW</button>
        </div>
      </div>
      <div className='whi'>
        <div className='benefit'>
          <div className='benefit-items'>
            <div className='link-line' onClick={()=>window.scrollTo(0,0)}><div className='text-item'><MdLocalShipping /><h3>Free Shipping</h3> </div></div>
            <p>Above $5 Only</p>
          </div>
          <div className='benefit-items'>
            <div className='link-line' onClick={()=>window.scrollTo(0,0)}><div className='text-item'><BiSolidContact /><h3>Certified Organic</h3></div></div>
            <p>100% Gurantee</p>
          </div>
          <div className='benefit-items'>
            <div className='link-line' onClick={()=>window.scrollTo(0,0)}><div className='text-item'><FaMoneyBillAlt /><h3>Huge Saving</h3></div></div>
            <p>At Lowest Price</p>
          </div>
          <div className='benefit-items'>
            <div to={'/'} className='link-line' onClick={()=>window.scrollTo(0,0)}><div className='text-item'><HiMiniArrowPathRoundedSquare /><h3>Easy Returns</h3></div></div>
            <p>No Questions Asked</p>
          </div>
        </div>

        <div className='selling-products'>Best Selling Products</div>
        <div className='leaf-pic'><img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png' /></div>
        <div className='image-api-data1'>
          {
            imageData.map((item, index) => {
              return (
                <>
                  <Link to={`/cart/${item.id}` } className='image-api-data1-design'><div key={index}><img src={item.image} />
                    <p className='p1'>{item.type}</p>
                    <p className='p2'>{item.product_name}</p>
                    <p className='p3'>{rating}</p>
                    <p className='p4'>{item.dollar}</p>
                  </div></Link>
                </>
              )
            })
          }
        </div>
      </div>

      <div className='leaf-img2'><img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png' /></div>
      <div className='farm-fresh'>
        <div className='image-overlay'><img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg' />
          <div className='overlay-all'>
            <h2>Farm Fresh Fruits</h2>
            <p>Ut sollicitudin quam vel purus tempus,<br /> vel eleifend felis varius</p>
            <button><FaArrowRight className='arr' /> SHOPNOW</button>
          </div>
        </div>
        <div className='image-overlay'><img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg' />
          <div className='overlay-all'>
            <h2>Farm Fresh Fruits</h2>
            <p>Ut sollicitudin quam vel purus tempus,<br /> vel eleifend felis varius</p>
            <button><FaArrowRight className='arr' /> SHOPNOW</button>
          </div>
        </div>
        <div className='image-overlay'><img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg' />
          <div className='overlay-all'>
            <h2>Farm Fresh Fruits</h2>
            <p>Ut sollicitudin quam vel purus tempus,<br /> vel eleifend felis varius</p>
            <button><FaArrowRight className='arr' /> SHOPNOW</button>
          </div>
        </div>
        <div className='image-overlay'><img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg' />
          <div className='overlay-all'>
            <h2>Farm Fresh Fruits</h2>
            <p>Ut sollicitudin quam vel purus tempus,<br /> vel eleifend felis varius</p>
            <button><FaArrowRight className='arr' /> SHOPNOW</button>
          </div>
        </div>
      </div>

      <div className='black-background-design'>
        <h1>Get 25% Off On Your First Purchase!</h1>
        <button className='btn-btn-green'><BsCart4 className='arr' /> SHOP NOW</button>
      </div>

      <div className='reg-heading'>Try It For Free. No Registrations Needed</div>

      <div className='trending-Products'>
        <div className='trending-heading'>Trending Products</div>
        <div className='leaf-img3'><img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png' /></div>
      </div>

      <div className='image-api-data1'>
        {
          imageData2.map((item, index) => {
            return (
              <>
                <Link to={`/cart/${item.id}`} className='image-api-data1-design'><div key={index}><img src={item.image} />
                  <p className='p1'>{item.type}</p>
                  <p className='p2'>{item.product_name}</p>
                  <p className='p3'>{rating}</p>
                  <p className='p4'>{item.dollar}</p>
                </div></Link>
              </>
            )
          })
        }
      </div>

      <div className='trending-Products'>
        <div className='trending-heading'>Customers Reviews</div>
        <div className='leaf-img3'><img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png' /></div>
      </div>

      <div className='brand1'>
        <div className='brand-flex'>
          <h1>Featured Brands :</h1>
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg' />
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg' />
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg' />
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg' />
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg' />
        </div>
      </div>



    </>
  )
}

export default HomePage