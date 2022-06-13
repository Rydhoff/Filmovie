import "./Pagination.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import right from "../../assets/svg/right.svg";
import left from "../../assets/svg/left.svg";

function Pagination(props) {
    let navigate = useNavigate();
    return(
        <div className="pagination">
            <div onClick={() => {navigate(`/${props.route}/${parseInt(props.page) > 1 ? parseInt(props.page) - 1 : parseInt(props.page)}`);window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });}}><img src={left} /></div>
            <div>{props.page}</div>
            <div onClick={() => {navigate(`/${props.route}/${parseInt(props.page)+1}`); window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });}}><img src={right} /></div>
        </div>
    )
}

export default Pagination;