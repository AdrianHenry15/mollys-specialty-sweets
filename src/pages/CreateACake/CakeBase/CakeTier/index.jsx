import React from "react";

// Styles
import "../../index.scss";

// Components
import SingleTier from "./SingleTier/SingleTier";
import MultipleTier from "./MultipleTier/MultipleTier";

const CakeTier = () => {
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Cake Tier</h4>
            </div>
            <div className="base-item-wrapper">
                <SingleTier />
                <MultipleTier />
            </div>
        </div>
    );
};

export default CakeTier;
