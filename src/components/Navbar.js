import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className={props.listStyle ? props.listStyle + "navbar-list" : "navbar-list"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;