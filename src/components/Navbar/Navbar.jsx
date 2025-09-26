import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import nav_dropdown from "../../assets/nav_dropdown.png";
function Navbar() {
    const [active, setActive] = useState("home");
    const myRef = useRef(null)
    const toggleButton = (e) => {

        myRef.current.classList.toggle("hideLists");
        e.target.classList.toggle("open")
    }

    return (
        <div className="navbar">
            <div className="logo">
                {" "}
                <img src={logo} alt="" />
                <div>Banana Threads</div>
            </div>
            <div className="dropdown-list">
                <div className="nav-dropdown-btn">
                    {" "}
                    <img src={nav_dropdown} onClick={toggleButton} alt="" />
                </div>

                <ul className="lists " ref={myRef}>
                    <li
                        onClick={() => {
                            setActive("home");
                        }}
                    >
                        {" "}
                        <Link to="/"> Home </Link> {active === "home" ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setActive("men");
                        }}
                    >
                        <Link to="/men">Men</Link> {active === "men" ? <hr /> : <></>}{" "}
                    </li>
                    <li
                        onClick={() => {
                            setActive("women");
                        }}
                    >
                        <Link to="/women">Women</Link>{" "}
                        {active === "women" ? <hr /> : <></>}{" "}
                    </li>
                    <li
                        onClick={() => {
                            setActive("kids");
                        }}
                    >
                        <Link to="/kids">Kids </Link> {active === "kids" ? <hr /> : <></>}{" "}
                    </li>
                </ul>

            </div>
            <div className="cart">
                <button className="login-button">login</button>
                <img src={cart_icon} alt="" />
            </div>
        </div>
    );
}

export default Navbar;
