import React from 'react'
import logo from './assets/foxbel-music-white.png'
import './options.css'

const Options = () => {
    return (
        <div className='options-container'>
            <img className='img-options' src={logo} alt="logo" />
            <h1 className='title-options'>Mi Libreria</h1>
            <ul>
                <a className='links-options' href="#"><li className='list-options'>Recientes</li></a>
                <a className='links-options' href="#"><li className='list-options'>Artistas</li></a>
                <a className='links-options' href="#"><li className='list-options'>Albums</li></a>
                <a className='links-options' href="#"><li className='list-options'>Canciones</li></a>
                <a className='links-options' href="#"><li className='list-options'>Estaciones</li></a>
            </ul>
            <h1 className='title-options'>Playlist</h1>
            <ul>
                <a className='links-options' href="#"><li className='list-options'>Metal</li></a>
                <a className='links-options' href="#"><li className='list-options'>Para Bailar</li></a>
                <a className='links-options' href="#"><li className='list-options'>Rock 90s</li></a>
                <a className='links-options' href="#"><li className='list-options'>Baladas</li></a>
            </ul>
        </div>
    )
}

export default Options