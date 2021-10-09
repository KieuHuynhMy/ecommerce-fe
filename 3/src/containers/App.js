import React, { Component } from 'react'
import Person from '../components/Persons/Person'

export default class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'bob', age: 26 }
    ],
    showPersons: true
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    })
  }

  togglePerson = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
       persons = this.state.persons.map((p, index) => {
        return (
          <Person key={p.id}
            name={p.name}
            age={p.age}
            changed={event => this.nameChangeHandler(event, p.id)}
          />
        )
      })
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePerson}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}
