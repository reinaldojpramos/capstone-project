import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import hamburger from "../assets/icons/🦆 icon _hamburger menu.svg";

import "../styles/Navbar.css";

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const burgerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && burgerRef.current && !burgerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <div
                className="hamburger"
                onClick={toggleMenu}
                style={{ display: props.isFooter ? "none" : "" }}
                ref={burgerRef}
            >
                <img src={hamburger} alt="Hamburger Menu" />
            </div>
            <ul className={props.listStyle === "vertical" ? "vertical-navbar-list" : "navbar-list" + (isOpen ? " show" : "")}>
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