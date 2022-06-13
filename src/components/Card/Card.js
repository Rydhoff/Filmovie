import './Card.css';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';

function Card(props) {
    let navigate = useNavigate();
    const location = useLocation();
    const { page } = useParams();
    
    function getType() {
        if(location.pathname == `/movies/${page}` || props.type == 'movie') {
            return 'movie'
        } else if(location.pathname == `/tv/${page}` || props.type == 'tv') {
            return 'tv'
        }
    }

    function getDetail() {
        navigate(`/detail/${props.id}`, { state : { type: getType() }})
    }

    return (
        <div className="card-container">
                <img src={props.image} />
                <p  onClick={getDetail} >{props.title}</p>
        </div>
    )
}

export default Card;