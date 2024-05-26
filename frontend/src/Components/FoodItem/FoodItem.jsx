import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,description,price,image}) => {
    const [itemCount,setItemCount] = useState(0);
    const {cartItems,setCartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {
                !cartItems[id]?<img className='add' onClick={()=>{addToCart(id)}} src={assets.add_icon_white}/>
                :<div className='food-item-counter'>
                    <img onClick={()=>{removeFromCart(id)}} src={assets.remove_icon_red} />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>{addToCart(id)}} src={assets.add_icon_green} />
                 </div>
            }
        </div>
        <div className='food-item-info'>
            <p>{name}</p>
            <img className='rating' src={assets.rating_starts} alt="" />
        </div>
        <div className="food-item-description">
            <p>{description}</p>
        </div>
        <div className="food-item-price">
            {price}
        </div>
    </div>
  )
}

export default FoodItem