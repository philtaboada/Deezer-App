import React, { useState } from 'react'
import './cardofmusic.css'
import './player.css'

const CardOfMusic = ({ music }) => {

    const [style, setstyle] = useState('none')

    const onCLick = () => {
        setstyle(!style);
    }

    return (
        <>
            <div className='card-container-space'>
                <div className='Card-cardofmusic'>
                    <i className="fa-solid fa-angle-right fa"></i>
                    <button className='button-fa-3x' onClick={onCLick}>
                        <i className="fa-solid fa-play fa-3x"></i>
                    </button>
                    <img src={music.album.cover_medium} alt="discografia del artista" />
                </div>
                <h1 className='subtitle-cardofmusic'>{music.title}</h1>
                <p className='parraf-cardofmusic'>{music.artist.name}</p>
            </div>
            <div className='reproductor-container-music'>
                <div style={{ display: style ? 'none' : 'flex' }}>
                    <div className='player-container'>
                        <div className='description-player'>
                            <img src={music.album.cover_medium} alt="wallpaper" />
                            <div className='player-description'>
                                <h1>{music.title}</h1>
                                <p>{music.artist.name} - {music.album.title}</p>
                            </div>
                        </div>
                        <audio controls
                            volume={0.5}
                            className="audio-container">
                            <source src={music.preview} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardOfMusic