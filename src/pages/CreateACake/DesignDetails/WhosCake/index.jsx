import React from "react";

const WhosCake = () => {
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Who Is The Cake For?</h4>
            </div>
            <div className="input-containers">
                <div className="input-container">
                    <input name="who" type="checkbox" value={"Male"} />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="input-container">
                    <input name="who" type="checkbox" value={"Female"} />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="input-container">
                    <input name="who" type="checkbox" value={"Child"} />
                    <label htmlFor="child">Child</label>
                </div>
                <div className="input-container">
                    <input name="who" type="checkbox" value={"Teen"} />
                    <label htmlFor="teen">Teen</label>
                </div>
                <div className="input-container">
                    <input name="who" type="checkbox" value={"Adult"} />
                    <label htmlFor="adult">Adult</label>
                </div>
            </div>
            <p className="italics">Check All That Apply</p>
        </div>
    );
};

export default WhosCake;
