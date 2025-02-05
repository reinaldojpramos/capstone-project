
import logo from "../assets/images/Logo .svg";
import Navbar from "./Navbar";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img alt="Little Lemon Logo" src={logo} className="footer-logo" />
                <div className="footer-nav">
                    <p>Doormat Navigation</p>
                    <ul><Navbar listStyle="vertical" isFooter="true"/></ul>
                </div>
                <div className="footer-box">
                    <p>Contact</p>
                    <p>Address</p>
                    <p>Phone</p>
                    <p>E-mail</p>
                </div>
                <div className="footer-box">
                    <p>Social Media Links</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;