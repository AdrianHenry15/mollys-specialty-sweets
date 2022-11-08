import React from "react";

const FrostingFlavor = (props) => {
    const Frostings = props.frostings;
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Frosting Flavor</h4>
            </div>
            <select name="cake-size" className="cake-select">
                <option value="" defaultValue>
                    Choose One
                </option>
                {Frostings.map(({ id, name }) => {
                    return (
                        <option key={id} value={name}>
                            {name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FrostingFlavor;
