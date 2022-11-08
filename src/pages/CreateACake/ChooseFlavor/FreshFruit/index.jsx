import React from "react";

const FreshFruit = () => {
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Fresh Fruit</h4>
            </div>
            <div className="input-containers">
                <div className="input-container">
                    <input name="fruit" type="radio" value={"No"} />
                    <label htmlFor="fruit">No</label>
                </div>
                <div className="input-container">
                    <input name="fruit" type="radio" value={"Yes"} />
                    <label htmlFor="fruit">Yes</label>
                </div>
            </div>
        </div>
    );
};

export default FreshFruit;
