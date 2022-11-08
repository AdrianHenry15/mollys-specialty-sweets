import React from "react";

const PreferredColors = () => {
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>List Preferred Colors for Cake</h4>
            </div>
            <div className="base-item-wrapper">
                <textarea
                    placeholder="Enter Colors Here..."
                    name="preferred-colors"
                    className="cake-select cake-textarea"
                ></textarea>
            </div>
        </div>
    );
};

export default PreferredColors;
