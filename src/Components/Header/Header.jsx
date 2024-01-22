import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className=" flexCenter paddings innerWidth h-container">
            <img src='./logo.png' width= {100} alt='logo' ></img>

            <div className="flexCenter h-menu">
                <a href="">Residency</a>
                <a href="">our service</a>
                <a href="">Contact us</a>
                <a href="">get started</a>
                <button className='button'>

                <a href="">Contact</a>

                </button>
              
            </div>
        </div>

    
    </section>
  )
}

export default Header