import "./Pagination.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pagination(props) {
    let navigate = useNavigate();
    const [pages, setPage] = useState(parseInt(props.page));

    function next() {
        setPage(pages+1);
        navigate(`/${props.route}/${pages}`)
    }

    function prev() {
        if(pages > 0) {
            setPage(pages-1);
            navigate(`/${props.route}/${pages}`)
        }
    }

    return(
        <div className="pagination">
            <div className="go" onClick={prev}>Prev</div>
            <div>{props.page}</div>
            <div className="go" onClick={next}>Next</div>
        </div>
    )
}

export default Pagination;