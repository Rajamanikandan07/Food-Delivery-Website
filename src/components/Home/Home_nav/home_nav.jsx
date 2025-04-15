import "./home_nav.css";
import React, { useState } from 'react'
import { GiChickenOven } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../Menu/menu";



export default function Home_Nav({Cart}) {
  const [Navcolor, setNavcolor] = useState(false)  //nav bar color change on scroll

  const changecolor = () => {
    if (window.scrollY >= 60) {
      setNavcolor(true)
    }
    else {
      setNavcolor(false)
    }
  }
  window.addEventListener('scroll', changecolor)


  return (
    <>
      <nav className={Navcolor ? 'home-nav nav-bg' : 'home-nav'}>
        <Link to='/Food-Delivery-Website' ><h1 className="home-nav-header" ><span><GiChickenOven /></span> Food Spot</h1></Link>
        <div className="home-nav-link-box">
        <Link to='/my_order' >My orders</Link>
          <Link to='/add-to-cart' ><FaShoppingCart /></Link>
          {Cart.length >=1 ?<p className="add-to-cart"></p> :null}
        </div>
      </nav>
    </>
  )
}

