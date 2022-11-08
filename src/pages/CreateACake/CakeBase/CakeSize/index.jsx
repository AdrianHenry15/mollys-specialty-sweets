import React from "react";

const CakeSize = () => {
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Round Cake Size</h4>
            </div>
            <div className="base-item-wrapper">
                <select name="cake-size" className="cake-select">
                    <option value="" defaultValue>
                        Choose One
                    </option>
                    <option value="6' (Serves 6-8) | 25.75">
                        6" (Serves 6-8) | 25.75
                    </option>
                </select>
            </div>
        </div>
    );
};

export default CakeSize;
