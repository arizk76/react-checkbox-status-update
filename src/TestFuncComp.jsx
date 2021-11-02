import React, { useState } from "react";

function TestFuncComp() {
  let onlySelectedList = [];
  let initialSelectionList = [
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
  const [onlySelected, setOnlySelected] = useState([]);

  const handleChecked = (evt) => {
    let optionName = evt.target.value;
    let optionSelectionStatus = evt.target.checked;

    let updatedSelectionList = selectionList;
    updatedSelectionList.find((option) => {
      if (option.name === optionName) {
        option.selected = optionSelectionStatus;
      }
      onlySelectedList = updatedSelectionList.filter(
        (item) => item.selected === true
      );

      setSelectionList(updatedSelectionList);
      setOnlySelected(onlySelectedList);
      return setOnlySelected(onlySelectedList);
    });
  };

  return (
    <div>
      <h1> Test scenario using React function component </h1>
      <p>
        Select from options list, State will be updated using setState() hook
      </p>
      <p>and only selected options will be updated and rendered below </p>

      {selectionList.map((item) => {
        return (
          <div key={item.id}>
            <label>{item.name}</label>
            <input
              type="checkbox"
              name={item.name}
              value={item.name}
              onChange={handleChecked}
            />
          </div>
        );
      })}
      <br />
      <h3>Only Selected List</h3>
      <ul style={{ listStyleType: "none" }}>
        {onlySelected.map((option) => {
          if (option.selected) {
            return <li key={option.id}>{option.name}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export default TestFuncComp;
