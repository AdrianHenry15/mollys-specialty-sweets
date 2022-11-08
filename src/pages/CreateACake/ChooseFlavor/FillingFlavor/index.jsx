import React from "react";

const FillingFlavor = (props) => {
    const Fillings = props.fillings;
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>Fillings Flavor</h4>
            </div>
            <select name="cake-size" className="cake-select">
                <option value="" defaultValue>
                    Choose One
                </option>
                {Fillings.map(({ id, name }) => {
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

export default FillingFlavor;
