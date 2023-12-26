import selectcss from "./select.module.css";
import dropdown from "../../assets/dropdown.svg";
import React, { useState } from "react";
const Select = ({ onChange, defaultValue, children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleOptionClick = (option) => {
    onChange(option);
    setShowOptions(false);
    setSelectedOption(option);
    // Do something with the selected value (e.g., send to server, update state, etc.)
    console.log("Selected value:", option);
  };

  console.log();

  return (
    <div
      onClick={() => setShowOptions(!showOptions)}
      className={selectcss.container}
    >
      <div className={selectcss.dropdown}>
        {selectedOption || <p>Headphone type</p>}
        <img src={dropdown} alt="" />
      </div>
      {showOptions && (
        <div className={selectcss.options}>
          {React.Children.map(children, (child) => (
            <p
              key={child.props.value}
              onClick={() => handleOptionClick(child.props.value)}
            >
              {child.props.children}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
