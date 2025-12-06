import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import {Link} from 'react-router-dom'
import banner from '../../assets/images/banner.jpg'
import basketball from '../../assets/images/basketball.jpg'
import combat from '../../assets/images/combat.jpg'
import tennis from '../../assets/images/tennis.jpg'
import football from '../../assets/images/football.jpg'
import gym from '../../assets/images/gym.jpg'
import logo from '../../assets/images/logo.png'



function Home() {
  return (
    <div>
        <section className='banner'>
            <img src={banner} alt="banner" />
            <div className='catchphrase'>
                <h1 className='banner-heading'>Performance Starts Here.</h1>
                <Link to={'/shop'}>
                    <button>SHOP</button>
                </Link>
                
            </div>
        </section>
        <section className='featured-container'>
            <h1>Featured</h1>
            <h2>Different sports, same passion!</h2>
            <div className='featured-list'>
                <div className='featured-item'>
                    <img src={basketball} alt="basketball" />
                    <h2>Basketball</h2>
                </div>
                <div className='featured-item'>
                    <img src={football} alt="Football" />
                    <h2>Football</h2>
                </div>
                <div className='featured-item'>
                    <img src={tennis} alt="tennis" />
                    <h2>Tennis</h2>
                </div>
                <div className='featured-item'>
                    <img src={combat} alt="combat" />
                    <h2>Combat</h2>
                </div>
                <div className='featured-item'>
                    <img src={gym} alt="basketball" />
                    <h2>Gym</h2>
                </div>  
            </div>
        </section>
        <div className='footer'>
                <div className='footer-info'>
                    <div className='help-info'>
                        <h3>Help & Information</h3>
                        <p>Help</p>
                        <p>Orders</p>
                        <p>Shipping and delivery</p>
                        <p>Returns</p>
                        <p>Contact us</p>
                    </div>
                    <div className='social-media'>
                        <h3>Social Media</h3>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>
                <div className='footer-logo'>
                    <img src={logo} alt="logo" />
                </div>
        </div>
        
        
    </div>
  )
}

export default Home