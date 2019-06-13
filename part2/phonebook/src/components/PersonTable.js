import React from 'react'
import Person from './Person'

const PersonTable = ({persons, removePerson}) => {
  return (
    <table>
      <tbody>
        {persons.map(({ name, number, id }) =>
         <Person name={name} number={number} id={id} removePerson={removePerson} key={name} />)}
      </tbody>
    </table>
  )
}

export default PersonTable