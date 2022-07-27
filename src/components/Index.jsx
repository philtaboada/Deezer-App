import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import CardOfMusic from './Main/CardOfMusic'
import Poster from './Main/Poster'
import './Main/cardofmusic.css'
import axios from 'axios'
import Options from './Main/Options'

const Principal = () => {

    const [music, setMusic] = useState("eminen");
    const [product, setProduct] = useState(null);
    //for input
    const handleChange = (e) => {
        e.preventDefault();
        setMusic(e.target.value);
    };

    //for the search button
    const handleClick = (e) => {
        e.preventDefault();
        const options = {
            method: "GET",
            url: "https://deezerdevs-deezer.p.rapidapi.com/search",
            params: { q: music },
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": `33787b9f8emsh8158008a0f4169ap16190bjsna00fc2a2d4e2`,
            },
        };

        axios
            .request(options)
            .then((response) => {
                setProduct(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (
        <div className='index-app'>
            <Options />

            <div className='main-app'>
                <Navbar
                    handleChange={handleChange}
                    handleClick={handleClick}
                />
                <Poster />
                <div className='card-container-cardofmusic'>
                    {product?.data.map((music) => (
                        <CardOfMusic music={music}
                            key={music.id}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Principal