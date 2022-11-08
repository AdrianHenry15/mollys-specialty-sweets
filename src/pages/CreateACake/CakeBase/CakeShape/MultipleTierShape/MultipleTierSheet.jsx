import MultipleTierSheetImg from "../../../../../assets/img/create_a_cake/multiple-tier-sheet.png";

const MultipleTierShape = () => {
    return (
        <div className="base-item-container">
            <div className="base-item">
                <ul className="base-tier-list-item">
                    <li>
                        <input type="radio" name="shape" />
                        <label htmlFor="multiple-tier">
                            <img
                                src={MultipleTierSheetImg}
                                alt="multiple"
                                className="multiple-tier-sheet"
                            />
                            <h4 className="base-name">Sheet</h4>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MultipleTierShape;
