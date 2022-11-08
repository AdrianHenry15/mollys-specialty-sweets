import React from "react";

const TypeOfCake = [
    {
        id: 1,
        type: "Birthday",
    },
    {
        id: 2,
        type: "Baby Shower",
    },
    {
        id: 3,
        type: "Graduation",
    },
    {
        id: 4,
        type: "Anniversary",
    },
    {
        id: 5,
        type: "Other",
    },
];

const CakeType = () => {
    return (
        <div className="cake-base-container">
            <div className="cake-base-title-container">
                <h4>What Is The Cake For?</h4>
            </div>
            <div className="base-item-wrapper">
                <select name="cake-type" className="cake-type cake-select">
                    <option value="" defaultValue>
                        Choose One
                    </option>
                    {TypeOfCake.map(({ id, type }) => {
                        return (
                            <option key={id} value={type}>
                                {type}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default CakeType;
