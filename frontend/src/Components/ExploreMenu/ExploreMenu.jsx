import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur deserunt iure, labore est, quod aliquam magni perferendis laboriosam possimus eos quo voluptatem sapiente. Fugit odio libero fugiat eum id!</p>
            <div className='explore-menu-list'>
                    {menu_list.map((item,index)=>{
                       return( <div key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} onClick={()=>{setCategory(pre=>pre===item.menu_name?"All":item.menu_name)}} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                       </div> )
                    })}
                </div>
                <hr />
    </div>
  )
}

export default ExploreMenu