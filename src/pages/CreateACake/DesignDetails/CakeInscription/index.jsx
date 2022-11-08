import React from "react";

const CakeInscription = () => {
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Write Cake Inscription (If any) </h4>
            </div>
            <div className="base-item-wrapper">
                <textarea
                    placeholder="Enter Inscription Here..."
                    name="inscription"
                    className="cake-select inscription"
                ></textarea>
            </div>
        </div>
    );
};

export default CakeInscription;
