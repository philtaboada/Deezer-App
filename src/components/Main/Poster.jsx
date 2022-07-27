import './Poster.css'
import React from 'react'
import discografia from './assets/1511885438_220718_1512040503_album_normal.jpg'

const Poster = () => {
    return (
        <>
            <div className='poster-container'>
                <div className='img-poster'>
                    <img src={discografia} alt="" />
                    <a><i className="fa-solid fa-play fa-5x"></i></a>
                </div>
                <div className='info-poster'>
                    <div className='bg-info-poster'>
                    </div>
                    <h1>Adele</h1>
                    <div className='intro-poster'>
                        <p className='p1-intro-poster'>Lo mejor de Adele</p>
                        <p className='p2-intro-poster'>321,123 seguidores</p>
                    </div>
                    <p className='text-poster'>Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente
                        <br /> como Adele, es una cantante, compositora y multinstrumentista británica.8 </p>
                    <div className='button-poster'>
                        <button className='button1-poster'>Reproducir</button>
                        <button className='button2-poster'>Seguir</button>
                    </div>
                </div>
            </div>
            <h1 className='title-cardofmusic'>Resultados</h1>

        </>

    )
}

export default Poster

