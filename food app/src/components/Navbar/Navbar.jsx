import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='navbar-menu'>
        <Link to='/' className={menu==='home'? 'active': ''} onClick={()=>setMenu('home')}>Home</Link>
        <a href='#explore-menu' className={menu==='menu'? 'active': ''} onClick={()=>setMenu('menu')}>Menu</a>
        <a href='#app-download' className={menu==='mobile-app'? 'active': ''} onClick={()=>setMenu('mobile-app')}>Mobile-app</a>
        <a href='#footer' className={menu==='contact-us'? 'active': ''} onClick={()=>setMenu('contact-us')}>Contact us</a>
      </ul>
      <div className="navbar-right"></div>
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
      </div>
      <button>Sign in</button>
    </div>
  )
}

export default Navbar
