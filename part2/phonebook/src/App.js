import React, { useState } from 'react'
import FilteredPersonTable from './components/FilteredPersonTable';
import AddPersonForm from './components/AddPersonForm';
import FilterFragment from './components/FilterFragment';

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
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterFragment currentFilter={currentFilter} setFilter={setFilter}/>
      <h2>Add a new entry</h2>
      <AddPersonForm nameGet={newName} nameSet={setNewName}
        numberGet={newNumber} numberSet={setNewNumber}
        addName={addName} />
      <h2>Numbers</h2>
      <FilteredPersonTable filter={currentFilter} persons={persons} />
    </div>
  )
}

export default App