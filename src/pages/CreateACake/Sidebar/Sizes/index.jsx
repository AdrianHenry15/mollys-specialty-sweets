import React, { useState } from "react";

const Sizes = (props) => {
    const [sizeOptions, setSizeOptions] = useState(false);

    const handleSizeOptionClick = () => {
        setSizeOptions(!sizeOptions);
    };

    return (
        <>
            <div className="dropdown-container sizes-container">
                {sizeOptions && (
                    <img
                        src={props.downArrow}
                        alt="dropdown_arrow"
                        className="dropdown-arrow down-arrow"
                        onClick={handleSizeOptionClick}
                    />
                )}
                {!sizeOptions && (
                    <img
                        src={props.rightArrow}
                        alt="right_arrow"
                        className="dropdown-arrow right-arrow"
                        onClick={handleSizeOptionClick}
                    />
                )}
                <h3>Sizes</h3>
            </div>
            {sizeOptions && (
                <div className="options-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Sheet Size</th>
                                <th>Serves</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1/4</td>
                                <td>28 People</td>
                            </tr>
                            <tr>
                                <td>1/2</td>
                                <td>48 People</td>
                            </tr>
                            <tr>
                                <td>FULL</td>
                                <td>98 People</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Round Size</th>
                                <th>Serves</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6"</td>
                                <td>6-8 People</td>
                            </tr>
                            <tr>
                                <td>7"</td>
                                <td>10-12 People</td>
                            </tr>
                            <tr>
                                <td>8"</td>
                                <td>10-18 People</td>
                            </tr>
                            <tr>
                                <td>9"</td>
                                <td>20-24 People</td>
                            </tr>
                            <tr>
                                <td>10"</td>
                                <td>26-35 People</td>
                            </tr>
                            <tr>
                                <td>12"</td>
                                <td>35-48 People</td>
                            </tr>
                            <tr>
                                <td>14"</td>
                                <td>50-65 People</td>
                            </tr>
                            <tr>
                                <td>16"</td>
                                <td>70-85 People</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Sizes;
