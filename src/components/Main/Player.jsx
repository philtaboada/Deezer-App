import React from 'react'
import './player.css'

const Player = () => {


    return (

        <div className='player-container'>
            <div className='description-player'>
                <img src="https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/250x250-000000-80-0-0.jpg" alt="wallpaper" />
                <div className='player-description'>
                    <h1>Adele</h1>
                    <p>Juana - la loca</p>
                </div>
            </div>
            <audio controls className="audio-container">
                <source src="" type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Player
