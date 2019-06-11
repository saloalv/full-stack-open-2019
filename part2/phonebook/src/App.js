import React, { useState } from 'react'
import Person from './components/Person';
import FilteredPersonTable from './components/FilteredPersonTable';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [currentFilter, setFilter] = useState('')

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
      <h1>Phonebook</h1>
      <div>show matching filter: <input value={currentFilter} onChange={event => setFilter(event.target.value)}/></div>
      <h2>Add a new entry</h2>
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
      <FilteredPersonTable filter={currentFilter} persons={persons} />
    </div>
  )
}

export default App