import React from "react";
import Person from './Person/Person';

const persons = props => {
  return props.persons.map((p, index) => {
    return (
      <Person
        clicked={() => props.clicked(index)}
        key={p.id}
        name={p.name}
        age={p.age}
        changed={event => props.changed(event, p.id)}
        isAuth={props.isAuthenticated}
      />
    )
  })
}

export default persons;