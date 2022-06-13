import axios from "axios";
import "./Detail.css"
import { useEffect, useState } from "react";
import API from "../../../config/api";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Loading from "../../../assets/image/Loading.gif";
import noImage from "../../../assets/image/noimage.png"

function Detail() {
    const [data, setData] = useState({});
    const [genres, setGenre] = useState([]);
    const navigate = useNavigate();
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        axios.get(API.fetchDetail(location.state.type, id))
        .then((response) => {
            const res = response.data;
            const gen = response.data.genres;
            setData(res);
            setLoading(false);
            setGenre(gen);
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

    function getBackdrop(data) {
        if(data.backdrop_path == null) {
            return noImage
        } else {
            return API.fetchImage(data.backdrop_path)
        }
    }

    return (
        <div className="detail-container">
            <div className="backdrop"><img src={ loading ? Loading : getBackdrop(data)} /></div>
            <div className="poster"><img src={ loading ? Loading : getPoster(data)} /></div>
            <div className="description">
                <h1>{data.original_title || data.original_name}</h1>
                <p className="tagline">{data.tagline ? `" ${data.tagline} "` : ''}</p>
                <ul>
                {genres.map(genre => <span className="genre" key={genre.id}>{genre.name}</span>)}
                </ul>
                
                <p className="overview">{data.overview}</p>
                <div onClick={() => {navigate(-1)}} className="back" >Back</div>
            </div>
        </div>
    )
}

export default Detail;