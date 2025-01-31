import Navbar from "./Navbar";
import logo from "../assets/images/Logo .svg";
import "../styles/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <img alt="Little Lemon Logo" src={logo} className="header-logo"/>
                <Navbar/>
            </div>
        </header>
    );
}

export default Header;
