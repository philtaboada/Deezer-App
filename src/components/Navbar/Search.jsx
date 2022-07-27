import React from 'react'
import './navbar.css'

const Search = ({ handleChange, handleClick }) => {

    return (
        <form className='input-container'>
            <input className='input-navbar' onChange={handleChange} type="text" placeholder='Buscar' />
            <button onClick={handleClick} className='input-button'><i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
        </form>
    )
}

export default Search