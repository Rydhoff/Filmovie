import Card from "../Card/Card";
import "./Search.css";
import API from "../../config/api";
import { useEffect, useState } from "react";
import axios from "axios";
import noImage from "../../assets/image/noimage.png";
import search from "../../assets/svg/search.svg"

function Search(props) {
    const [results,setResult] = useState([]);
    const [query,setQuery] = useState();

    useEffect(() => {
        if(props.type == 'Movie' && query) {
            axios.get(API.fetchSearchMovie(query))
            .then((response) => {
                const res = response.data.results;
                setResult(res);
            }).catch((err) => {
                console.log(err);
            })
        } else if(props.type == 'TV' && query) {
            axios.get(API.fetchSearchMovie(query))
            .then((response) => {
                const res = response.data.results;
                setResult(res);
            }).catch((err) => {
                console.log(err);
            })
        } else if(query == '') {
            setResult([]);
        }
    })

    function keyword(e) {
        setQuery(e.target.value)
    }

    return ( 
        <div>
            <div className="input">
                <img src={search} />
                <input type="text" onKeyUp={keyword} placeholder={`Find ${props.type}`} />
            </div>
            
            <div className="card-wrappers">
                {
                    results.map((result) => {
                        return(<Card id={result.id} key={result.id} title={result.title || result.name} image={result.poster_path ?  API.fetchImage(result.poster_path) : noImage}/>)
                    })
                }
            </div>
        </div>
     );
}

export default Search;