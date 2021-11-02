import React, { useState } from "react";

function TestFuncComp() {
  const initialSelectionList = [
    {
      id: 1,
      name: "option1",
      selected: false
    },
    {
      id: 2,
      name: "option2",
      selected: false
    },
    {
      id: 3,
      name: "option3",
      selected: false
    },
    {
      id: 4,
      name: "option4",
      selected: false
    },
    {
      id: 5,
      name: "option5",
      selected: false
    }
  ];

  const [selectionList, setSelectionList] = useState(initialSelectionList);
  const [onlySelectedList, setOnlySelectedList] = useState([]);

  const handleChecked = (evt) => {
    const selectedOptionName = evt.target.value;
    const selectedOptionStatus = evt.target.checked;

    let updatedSelectionList = [...selectionList];
    let updatedOnlySelectedList = [];
    updatedSelectionList.forEach((item) => {
      if (item.name === selectedOptionName) {
        item.selected = selectedOptionStatus;
      }

      updatedOnlySelectedList = updatedSelectionList.filter(
        (item) => item.selected === true
      );

      setSelectionList(updatedSelectionList);
      setOnlySelectedList(updatedOnlySelectedList);
    });
  };

  return (
    <div>
      <h1> Test scenario using React function component </h1>
      <p>
        Select from options list, State will be updated using setState() hook
      </p>
      <p>and only selected options will be updated and rendered below </p>

      {selectionList.map((item) => (
        <div key={item.id}>
          <label>{item.name}</label>
          <input
            type="checkbox"
            name={item.name}
            value={item.name}
            onChange={handleChecked}
          />
        </div>
      ))}
      <br />
      <h3>Only Selected List</h3>
      <ul style={{ listStyleType: "none" }}>
        {onlySelectedList.map((option) => (
          <li key={option.id}>{option.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TestFuncComp;
