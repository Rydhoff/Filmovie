import Card from "../../../components/Card/Card";
import Navbar from "../../../components/Navbar/Navbar";
import Pagination from "../../../components/Pagination/Pagination";
import "./Tv.css";
import API from "../../../config/api";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import noImage from "../../../assets/image/noimage.png";

function Tv() {
    let { page } = useParams();
    const [tv, setTv] = useState([])

    useEffect(() => {
        axios.get(API.fetchTv(page))
        .then((response) => {
            const res = response.data.results;
            setTv(res);
             
        }).catch((err) => {
            console.log(err);
        })
    })

    function getPoster(tv) {
        if(tv.poster_path == null) {
            return noImage
        } else {
            return API.fetchImage(tv.poster_path)
        }
    }

    return (
    <div>
        <Navbar />
        <h3>All TV</h3>
        <div className="card-wrapper">
            {
                tv.map((tv) => {
                return(<Card id={tv.id} key={tv.id} title={tv.name} image={getPoster(tv)}/>)
                })
            }
        </div>
        <Pagination route="tv" page={page} />
    </div>)
}

export default Tv;