import React from "react";
import './People.css';


const People = ({ people, deletePerson }) => {
  return (
    <div className="person-list">{
      people.map(person => {
        return person.age > 21 ? (
          <div className="person" key={person.id}>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>favColor: {person.favColor}</div>
            <button onClick={() => {deletePerson(person.id)} }>Delete Person</button>
          </div>) : null
      })
    }
    </div>
  );
}
export default People;
