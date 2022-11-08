import React from "react";

const MainFlavor = (props) => {
    const Flavors = props.flavors;
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Main Flavor</h4>
            </div>
            <select name="cake-size" className="cake-select">
                <option value="" defaultValue>
                    Choose One
                </option>
                {Flavors.map(({ id, name }) => {
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

export default MainFlavor;
