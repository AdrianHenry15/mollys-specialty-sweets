import React from "react";
import "./index.scss";
import { fallDown as Menu } from "react-burger-menu";
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
    {
        id: 5,
        name: "Create A Cake",
        path: "/create-a-cake",
    },
    {
        id: 6,
        name: "Signature Sweets",
        path: "/signature-sweets",
    },
    {
        id: 7,
        name: "Themed Sweets",
        path: "/themed-sweets",
    },
    {
        id: 8,
        name: "FAQs",
        path: "/faqs",
    },
];

const BurgerMenu = () => {
    return (
        <>
            <Menu isOpen={false}>
                <nav className="menu-container">
                    <div className="navigation-container">
                        {pages.map(({ id, name, path }) => {
                            return (
                                <Link
                                    key={id}
                                    className="bm-sidebar-nav-btn"
                                    to={path}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="menu-footer-container">
                        <h5 className="pickup-title">
                            Choose A Location For Pickup:
                        </h5>
                        <div className="address-container">
                            <h5 className="address">
                                2211 Allen Lane Winter Park, FL, 32792
                            </h5>
                            <h5 className="address">Westmoreland</h5>
                        </div>
                    </div>
                    <div className="footer-btns">
                        <button className="contact-btn btn-container">
                            <h4 className="contact-title">Contact Us</h4>
                        </button>
                        <button className="wedding-btn btn-container">
                            <h4 className="wedding-title">Weddings</h4>
                        </button>
                    </div>
                </nav>
            </Menu>
        </>
    );
};

export default BurgerMenu;
