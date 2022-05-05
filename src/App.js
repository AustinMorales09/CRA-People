import React, { Component } from 'react'
import People from './People'
import AddPeople from './AddPeople'
export default class App extends Component {
  state = {
    people: [
      {name: 'Austin', age: '24', favColor: 'blue', id:1},
      {name: 'Chris', age: '42', favColor: 'green', id:2},
      {name: 'Ryan', age: '12', favColor: 'red', id:3}
    ]
  }

  addPerson = (person) =>{
    person.id = Math.random();
    let people = [...this.state.people, person];
    this.setState({
      people: people
    })
  }

  deletePerson = (id) => {
   let people = this.state.people.filter(person => {
     return person.id !== id;
   });
   this.setState({
     people: people
   })
  }

  render() {
    return (
      <div className="app">
      
        <h1>My First React App</h1>
        <p>Hey There!</p>
        <People people={this.state.people} deletePerson={this.deletePerson}/>
      <AddPeople addPerson={this.addPerson}/>
      </div>
    )
  }
}

