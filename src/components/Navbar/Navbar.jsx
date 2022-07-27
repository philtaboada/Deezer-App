import './navbar.css'
import React from 'react'
import Search from './Search';

function Navbar({ handleChange, handleClick }) {

    return (
        <div className='input-global'>
            <Search
                handleChange={handleChange}
                handleClick={handleClick}
            />
            <div className='input-nameUser'>
                <span><i className="fa-solid fa-user"></i></span>
                <p>Phil Tab.</p>
            </div>
        </div>
    )
}

export default Navbar
