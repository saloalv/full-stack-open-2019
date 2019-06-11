import React, { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toUpperCase() === newName.toUpperCase())) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }

    const newPerson = [{ name: newName, number: newNumber }]
    setPersons(persons.concat(newPerson))

    console.log(event.target)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={event => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons.map(({ name, number }) => <Person name={name} number={number} key={name} />)}
        </tbody>
      </table>
    </div>
  )
}

export default App