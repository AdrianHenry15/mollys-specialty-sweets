import React from "react";

// Styles
import "../index.scss";
import "./CakeBase.scss";

// components
import CakeShape from "./CakeShape";
import CakeSize from "./CakeSize";
import CakeTier from "./CakeTier";

const CakeBase = () => {
    return (
        <>
            <div className="main-title-container cake-base-component">
                <h3>Choose Cake Base</h3>
                <br />

                {/* Cake Tier */}
                <CakeTier />

                {/* Cake Shape */}
                <CakeShape />

                {/* Cake Size */}
                <CakeSize />
            </div>
        </>
    );
};

export default CakeBase;
