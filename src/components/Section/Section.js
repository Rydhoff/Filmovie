import Card from '../Card/Card';
import React, { useEffect, useState } from 'react';
import './Section.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import API from '../../config/api';
import { Link } from 'react-router-dom';
import Loading from "../../assets/image/Loading.gif";
import noImage from "../../assets/image/noimage.png";

function Section(props) {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(props.url)
        .then((response) => {
            const res = response.data.results;
            setData(res);
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    })

    function getPoster(data) {
        if(data.poster_path == null) {
            return noImage
        } else {
            return API.fetchImage(data.poster_path)
        }
    }

    return(
        <div className="section-container">
            <div className="section-row">
                <h2>{props.title}</h2>
                <div className="view"><Link to={props.all}>View more</Link></div>
                <Swiper spaceBetween={20}  breakpoints={{
                300: {
                    width: 300,
                    slidesPerView: 2,
                    },
                640: {
                width: 640,
                slidesPerView: 3,
                },
                768: {
                width: 768,
                slidesPerView: 5,
                },
            }}>
                {
                    datas.map(data => {
                        return (<SwiperSlide key={data.id}><Card type={props.type} id={data.id} title={data.title || data.name} image={getPoster(data)} /></SwiperSlide>)
                    })
                }
            </Swiper>
            </div> 
        </div>
    )
}

export default Section;