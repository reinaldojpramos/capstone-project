import "../styles/Navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className={props.listStyle ? props.listStyle + "navbar-list" : "navbar-list"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;