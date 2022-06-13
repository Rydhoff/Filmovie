import Card from "../../../components/Card/Card";
import Navbar from "../../../components/Navbar/Navbar";
import Pagination from "../../../components/Pagination/Pagination";
import "./Movies.css";
import API from "../../../config/api";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import Footer from "../../../components/Footer/Footer";

function Movies() {
    let { page } = useParams();
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(API.fetchMovie(page))
        .then((response) => {
            const res = response.data.results;
            setMovies(res);
             
        }).catch((err) => {
            console.log(err);
        })
    })
    

    return (
    <div>
        <Navbar />
        <h3>All Movies</h3>
        <div className="card-wrapper">
            {
                movies.map((movie) => {
                return(<Card id={movie.id} key={movie.id} title={movie.title} image={API.fetchImage(movie.poster_path)}/>)
                })
            }
        </div>
        <Pagination route="movies" page={page} />
        <Footer />
    </div>)
}

export default Movies;