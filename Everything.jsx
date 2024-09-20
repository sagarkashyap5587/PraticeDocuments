import React, { useContext, useState } from 'react'
import "./CSS/Everything.css";
import Filter from './Filter';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { Data } from './ApiData';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

var rating = [];
for (var i = 0; i < 4; i++) {
  rating.push(<CiStar />)
}

const Everything = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState(40);

  const location = useLocation();
  const data4 = location.pathname;
  const data1 = data4.replace('/', '');
  
  const itemsFetch = useContext(Data);
  const itemsFetch2 = itemsFetch.filter((item) => item.dollar1 <= price);
  const imageData2 = itemsFetch2.slice(0, 3);
  const [showItem, setShowItem] = useState(1);

  const ItemShow = 9;
  const indexOfLastItem = showItem * ItemShow;
  const indexOfFirstItem = indexOfLastItem - ItemShow;
  const currentItems = itemsFetch2.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPage = Math.ceil(itemsFetch.length / ItemShow);
  

  const handleNextPage = () => {
    if (showItem < totalPage) {
      setShowItem(showItem + 1);
    }
  };

  const handlePReviousPage = () => {
    if(showItem > 1) {
      setShowItem(showItem - 1);
    }
  }



  const navigate = useNavigate();

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchSubmit = () => {
    const matchingProduct = itemsFetch.find(item => 
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (matchingProduct) {
      navigate(`/cart/${matchingProduct.id}`);
    } else {
      alert("No matching product found");
    }
  }

  return (
    <>
      <div className='main-page'>
        <div className='inner-page'>
          <div className='left-side'>
            <input 
              type='text' 
              placeholder='Search Products...' 
              value={searchTerm} 
              onChange={handleSearchChange} 
            />
            <span className='search-icon'>
              <MdOutlineKeyboardArrowRight onClick={handleSearchSubmit} />
            </span>
            <Filter price={price} onPriceChange={handlePriceChange} />
            <div className='category-header'>
              <h3>Groceries ({itemsFetch.length})</h3><br /><br />
              <h3>Juice ({imageData2.length})</h3>
            </div>
            <div className='products-container'>
              {imageData2.map((item, index) => (
                <Link to={`/cart/${item.id}`} className='product-item' key={index}>
                  <div>
                    <img src={item.image} alt={item.product_name} />
                    <p>{item.product_name}</p>
                    <h6 className='price-label'>{item.dollar}</h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className='vertical-line'></div>

          <div className='right-side'>
            <p className='breadcrumb'><Link to={'/'} className='breadcrumb-link'>Home</Link>/Shop</p>
            <h1 className='page-title'>{data1}</h1>
            <p className='results-info'>Showing {indexOfFirstItem+1}-{indexOfLastItem} of {itemsFetch.length}</p>

            <div className='products-list'>
              {currentItems.map((item, index) => (
                <Link to={`/cart/${item.id}`} className='product-item' key={index}>
                  <div>
                    <img src={item.image} alt={item.product_name} />
                    <p className='product-type'>{item.type}</p>
                    <p className='product-name'>{item.product_name}</p>
                    <p className='star-rating'>{rating}</p>
                    <h6 className='price-label'>{item.dollar}</h6>
                  </div>
                </Link>
              ))}
            </div>
            <button className='btn-nextpage' onClick={handleNextPage} >NextPage</button>
            <button className='btn-previouspage' onClick={handlePReviousPage} >Previous Page</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Everything
