import React, { Component } from 'react';

export default class TestClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionList: [
        {
          id: 1,
          name: 'option1',
          selected: false,
        },
        {
          id: 2,
          name: 'option2',
          selected: false,
        },
        {
          id: 3,
          name: 'option3',
          selected: false,
        },
        {
          id: 4,
          name: 'option4',
          selected: false,
        },
        {
          id: 5,
          name: 'option5',
          selected: false,
        },
      ],
      onlySelectedList: [],
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(evt) {
    let optionName = evt.target.value;
    let optionSelectionStatus = evt.target.checked;

    let updatedSelectionList = this.state.selectionList;
    let onlySelected = this.state.onlySelectedList;

    updatedSelectionList.find((option) => {
      if (option.name === optionName) {
        option.selected = optionSelectionStatus;
      }
      onlySelected = updatedSelectionList.filter(
        (item) => item.selected === true
      );
    });
    this.setState({
      selectionList: updatedSelectionList,
    });
    this.setState({
      onlySelectedList: onlySelected,
    });

    console.log(this.state.selectionList);
  }

  render() {
    return (
      <div>
        <h1> Test scenario using React Class component </h1>
        <p>
          Select from options list, State will be updated using useState() hook
        </p>
        <p>and only selected options will be updated and rendered below </p>

        {this.state.selectionList.map((item) => {
          return (
            <div key={item.id}>
              <label>{item.name}</label>
              <input
                type='checkbox'
                name={item.name}
                value={item.name}
                onChange={(evt) => this.handleSelection(evt)}
              />
            </div>
          );
        })}
        <br />
        <h3>Only Selected List</h3>
        <ul style={{ listStyleType: 'none' }}>
          {this.state.onlySelectedList.map((option) => {
            if (option.selected) {
              return <li key={option.id}>{option.name}</li>;
            }
          })}
        </ul>
      </div>
    );
  }
}