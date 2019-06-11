import React from 'react'
import Person from './Person'

const PersonTable = ({persons}) => {
  return (
    <table>
      <tbody>
        {persons.map(({ name, number }) => <Person name={name} number={number} key={name} />)}
      </tbody>
    </table>
  )
}

export default PersonTable