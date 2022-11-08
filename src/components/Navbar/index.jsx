import React from "react";
import "./index.scss";
import ig from "../../assets/icons/icons8-instagram-old-64.png";
import { Link } from "react-router-dom";

const pages = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "Cakes",
        path: "/cakes",
    },
    {
        id: 3,
        name: "Cookies",
        path: "/cookies",
    },
    {
        id: 4,
        name: "Cupcakes",
        path: "/cupcakes",
    },
    // {
    //     id: 5,
    //     name: "Contact Us",
    //     path: "/contact",
    // },
    // {
    //     id: 5,
    //     name: "Create A Cake",
    //     path: "/create",
    // },
    // {
    //     id: 6,
    //     name: "Signature Sweets",
    //     path: "/signatures",
    // },
    // {
    //     id: 7,
    //     name: "Themed Sweets",
    //     path: "/themes",
    // },
    // {
    //     id: 8,
    //     name: "FAQs",
    //     path: "/faqs",
    // },
];

const Navbar = () => {
    return (
        <>
            <header className="navbar-container">
                <div className="title-container">
                    <Link className="title-link" to={"/"}>
                        <h4>Molly's Specialty Sweets</h4>
                    </Link>
                </div>
                <nav className="navigation-links">
                    {pages.map(({ id, name, path }) => {
                        if (name === "Create A Cake") {
                            return (
                                <Link
                                    key={id}
                                    className="nav-btns create-a-cake"
                                    to={path}
                                >
                                    {name}
                                </Link>
                            );
                        } else {
                            return (
                                <Link key={id} className="nav-btns" to={path}>
                                    {name}
                                </Link>
                            );
                        }
                    })}
                </nav>
                <div className="socials-container">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="ig-link"
                    >
                        <img
                            src={ig}
                            alt="instagram"
                            style={{ width: "40px" }}
                        />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Navbar;
