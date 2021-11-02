import React, { Component } from "react";

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

export default class TestClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionList: initialSelectionList,
      onlySelectedList: []
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(evt) {
    const optionName = evt.target.value;
    const optionSelectionStatus = evt.target.checked;

    const updatedSelectionList = [...this.state.selectionList];
    let updatedOnlySelectedList = [];

    updatedSelectionList.forEach((item) => {
      if (item.name === optionName) {
        item.selected = optionSelectionStatus;
      }
      updatedOnlySelectedList = updatedSelectionList.filter(
        (item) => item.selected === true
      );
      this.setState({
        selectionList: updatedSelectionList
      });
      this.setState({
        onlySelectedList: updatedOnlySelectedList
      });
    });
  }

  render() {
    return (
      <div>
        <p className="text">
          User should select from options list, Selection list will be updated
          using useState() hook for function component and setState() for class
          component, and only selected options will be updated and rendered
          below.
        </p>
        <h1 className="title">
          Test scenario 1 <span> Class component</span>
        </h1>
        <code>USING : (this.state) & (this.setState()) </code>
        <h3>User Selection Options</h3>
        <div className="selection-options">
          {this.state.selectionList.map((item) => (
            <label key={item.id}>
              {item.name}
              <input
                type="checkbox"
                name={item.name}
                value={item.name}
                onChange={(evt) => this.handleSelection(evt)}
              />
            </label>
          ))}
        </div>
        <br />
        <h3>Only Selected List</h3>
        <div className="only-selected">
          <ul>
            {this.state.onlySelectedList.map((option) => (
              <li key={option.id}>{option.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
