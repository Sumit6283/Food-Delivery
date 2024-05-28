import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col' >
        <div className="add-img-upload">
             <p>Upload Image</p>
             <label htmlFor="image"><img src={assets.upload_area} alt="" /></label>
             <input type="file" id='image' hidden required />
        </div>
        <div className="add-product-name">
             <p>Product name</p>
             <input type="text" name='name' />
        </div>
        <div className="product-description">
             <p>Product description</p>
              <textarea name="description" rows='6' id=""></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category">
                <p>Add Category</p>
                <select name="cateogory" id="">
                    <option value="">Pasta</option>
                    <option value="">Sanwich</option>
                </select>
            </div>
            <div className="add-price">
                <p>Product Price</p>
                <input name='price' type="Number" />
            </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add