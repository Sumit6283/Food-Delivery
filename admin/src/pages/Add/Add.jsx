import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const Add = () => {
  const [image,setImage] = useState(false)
  return (
    <div className='add'>
      <form className='flex-col' >
        <div className="add-img-upload flex-col">
             <p>Upload Image</p>
             <label htmlFor="image"><img src={assets.upload_area} alt="" /></label>
             <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
             <p>Product name</p>
             <input type="text" name='name' />
        </div>
        <div className="add-product-description flex-col">
             <p>Product description</p>
              <textarea name="description" rows='6' id=""></textarea>
        </div>
        <div className="add-category-price flex-col">
            <div className="add-category">
                <p>Add Category</p>
                <select name="cateogory" id="">
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sanwich">Sanwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
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