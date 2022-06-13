import './Navbar.css';
import logo from '../../assets/image/Logo.png';
import { Link, useLocation, useParams } from 'react-router-dom';

function Navbar() {
    let { page } = useParams();
    let location = useLocation();
    return(
        <nav>
            <Link to="/" className={location.pathname == '/' ? 'active' : ''}>
            <div className="logo">
                <img src={logo} alt="logo" /><p>Filmovie</p>
            </div>
            </Link>
            <ul>
                <li><Link to="/" className={location.pathname == '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/movies/1" className={location.pathname == `/movies/${page}` ? 'active' : ''}>Movies</Link></li>
                <li><Link to="/tv/1" className={location.pathname == `/tv/${page}` ? 'active' : ''}>TV</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;