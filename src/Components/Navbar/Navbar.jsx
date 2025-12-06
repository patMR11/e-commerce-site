import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
function Navbar({user, setDisplay}) {

  const [smallMenu, setSmallMenu]= useState(false)
  const menuRef = useRef(null)
  const iconRef = useRef(null)

   //close small scroll down nav menu when clicking outside
    useEffect(()=>{

      function handler(e){
        if(menuRef.current && !menuRef.current.contains(e.target) && iconRef.current && !iconRef.current.contains(e.target)){
            setSmallMenu(false)
        }
      }
        document.addEventListener('mousedown', handler)

        return()=>{
            document.removeEventListener('mousedown',handler)
        }
    },[])

    //close drop down when screen resizes to medium
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth>=768){
                setSmallMenu(false)
            }
        };
        window.addEventListener("resize",handleResize);

        return()=>{
            window.removeEventListener("resize", handleResize)
        };
    },[])

  return (
    <nav className='navigation-bar'>
        <Link to='/'>
          <img src={logo} alt="logo icon" />
        </Link>
        <div className='nav-middle'>
            <div className='sport-content'>
              <p className='sport-link'>Sports</p>
              <div className='dropdown-content'>
                <p>Football</p>
                <p>Gym</p>
                <p>Basketball</p>
                <p>Tennis</p>
                <p>Combat</p>
              </div>
            </div>
            <p>New Arrivals</p>
            <p>Deals</p>
        </div>
        <div className={`nav-right ${smallMenu?"open":"close"}`}>
          <Link to= {'/search'}>  
            <FontAwesomeIcon icon={faSearch} className='fa-icon'/>
          </Link>
          <Link to = {'/register'}>
              {user?<span className='fa-icon'>Hello, {user}!</span>:
                <FontAwesomeIcon icon={faUser} className='fa-icon'/>
              }
          </Link>
          <FontAwesomeIcon icon={faShoppingCart} className='fa-icon' onClick={()=>setDisplay((prev)=>!prev)}/>
        </div>
        <div className='smallMenu-icon'>
            <FontAwesomeIcon icon={faBars} ref={iconRef} className="fa-icon" onClick={()=>{
              setSmallMenu((prev)=>!prev) 
              } }/>
        <div className={`small-nav ${smallMenu?"open":""}`} ref={menuRef}>
          <Link to= {'/search'}>  
            <FontAwesomeIcon icon={faSearch} className='fa-icon'/>
          </Link>
          <Link to = {'/register'}>
              {user?<span className='fa-icon'>Hello, {user}!</span>:
                <FontAwesomeIcon icon={faUser} className='fa-icon'/>
              }
          </Link>
          <FontAwesomeIcon icon={faShoppingCart} className='fa-icon' onClick={()=>setDisplay((prev)=>!prev)}/>
        </div>
        </div>
    </nav>
  )
}

export default Navbar