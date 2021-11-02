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
    },
    {
      id: 6,
      name: "option6",
      selected: false
    }
  ];

  const [selectionList, setSelectionList] = useState(initialSelectionList);
  const [onlySelectedList, setOnlySelectedList] = useState([]);

  const handleChecked = (evt) => {
    const selectedOptionName = evt.target.value;
    const selectedOptionStatus = evt.target.checked;

    const updatedSelectionList = [...selectionList];
    let updatedOnlySelectedList = [];
    updatedSelectionList.forEach((item) => {
      if (item.name === selectedOptionName) {
        item.selected = selectedOptionStatus;
      }
    });
    updatedOnlySelectedList = updatedSelectionList.filter(
      (item) => item.selected === true
    );

    setSelectionList(updatedSelectionList);
    setOnlySelectedList(updatedOnlySelectedList);
  };

  return (
    <div>
      <h1 className="title">
        Test scenario 2 <span> Function component</span>
      </h1>
      <code>USING: </code>
      <code>useState() Hook </code>
      <h3>User Selection Options</h3>
      <div className="selection-options">
        {selectionList.map((item) => (
          <label key={item.id}>
            {item.name}
            <input
              type="checkbox"
              name={item.name}
              value={item.name}
              onChange={handleChecked}
            />
          </label>
        ))}
      </div>
      <br />
      <h3>Only Selected List</h3>
      <div className="only-selected">
        <ul>
          {onlySelectedList.map((option) => (
            <li key={option.id}>{option.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TestFuncComp;
