import React from "react";

// Styles
import "../../index.scss";

// Components
import SingleTierRound from "./SingleTierShape/SingleTierRound";
import MultipleTierSheet from "./MultipleTierShape/MultipleTierSheet";

const CakeShape = () => {
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Cake Shape</h4>
            </div>
            <div className="base-item-wrapper">
                {/* Single Tier Shape */}
                <SingleTierRound />
                {/* Multiple Tier Shape */}
                <MultipleTierSheet />
            </div>
        </div>
    );
};

export default CakeShape;
