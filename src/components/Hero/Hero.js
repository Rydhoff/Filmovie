import "./Hero.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../../config/api";
import Loading from '../../assets/image/Loading.gif'

function Hero(props) {
    const [trends, setTrend] = useState('');
    const [videoKey, setVideoKey] = useState('');
    const [loading, setLoading] = useState(true);
    const [random, setRandom] = useState(Math.floor((Math.random() * 10)))
    const x = random;

    useEffect(() => {
        axios.get(props.url)
        .then((response) => {
            const res = response;
            setTrend(res.data.results[x]);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
        axios.get(API.fetchVideo(trends.id ? trends.id : 836225))
        .then((response) => {
            const res = response;
           setVideoKey(res.data.results[x] ? res.data.results[x].key : 'No Video')
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    })

    return (
        <div className="hero-container" style={{ backgroundImage: `url(${loading ? Loading : API.fetchImage(trends.backdrop_path)})`}}>
            <div className="overlays">
                <div className="overlay">
                    <div className="hero-wrapper">
                        <div className="hero-desc">
                            <h1 className="title">{trends.original_title}</h1>
                            <p className="subtitle">{trends.overview}</p>
                            <div className="btn-wrapper">
                                <div className="btn now"><a href={`${API.youtube}${videoKey}`} target="_blank" >Watch Now</a></div>
                                <div className="btn trailer"><a href={`${API.youtube}${videoKey}`} target="_blank" >Watch Trailer</a></div>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src={loading ? Loading : API.fetchImage(trends.poster_path)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;