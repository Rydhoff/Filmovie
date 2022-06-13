import logo from "../../assets/image/Logo.png";
import "./Footer.css";
import database from "../../assets/svg/database.svg";
import instagram from "../../assets/svg/instagram.svg";
import github from "../../assets/svg/github.svg";

function Footer() {
    return ( 
        <div className="footer">
            <div className="logo-footer">
                <img src={logo} alt="logo" /><p>Filmovie</p>
            </div>
            <div className="description">
                <h4>M Ridho Darmawan</h4>
                <p><a href="https://github.com/Ridhoooooo"><img src={github} alt="github"/> Github</a></p>
                <p><a href="https://www.instagram.com/rydhz_"><img src={instagram} alt="instagram"/> Instagram</a></p>
                <p><a href="https://developers.themoviedb.org/3"><img src={database} alt="api"/> API by TMDB</a></p>
                <p>© Copyright 2022, Filmovie.</p>
            </div>
        </div>
     );
}

export default Footer;