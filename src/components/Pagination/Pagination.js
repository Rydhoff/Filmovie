import "./Pagination.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import right from "../../assets/svg/right.svg";
import left from "../../assets/svg/left.svg";

function Pagination(props) {
    let navigate = useNavigate();
    const [pages, setPage] = useState(parseInt(props.page));

    function next() {
        setPage(pages+1);
        navigate(`/${props.route}/${pages}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    function prev() {
        if(pages > 0) {
            setPage(pages-1);
            navigate(`/${props.route}/${pages}`);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }

    return(
        <div className="pagination">
            <div onClick={prev}><img src={left} /></div>
            <div>{props.page}</div>
            <div onClick={next}><img src={right} /></div>
        </div>
    )
}

export default Pagination;