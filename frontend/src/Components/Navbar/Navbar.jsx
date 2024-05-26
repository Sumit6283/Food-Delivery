import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
            </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <img src={assets.basket_icon} alt="" />
            <button>Signin</button>
        </div>

    </div>
  )
}

export default Navbar