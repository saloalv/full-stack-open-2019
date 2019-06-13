import React, { useState, useEffect } from 'react'
import FilteredPersonTable from './components/FilteredPersonTable';
import AddPersonForm from './components/AddPersonForm';
import FilterFragment from './components/FilterFragment';
import API from './services/Phonebook'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [currentFilter, setFilter] = useState('')

  useEffect(() => {
    API.getAll().then(receivedPersons => setPersons(receivedPersons))
  },[])

  const addName = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name.toUpperCase() === newName.toUpperCase())) {
      // Person already exists, updating number
      const update = window.confirm(`${newName} already exists, update number?`);
      if (!update) return;

      const newPerson = {...getPersonByName(newName), number: newNumber};
      console.log(newPerson)
      API.update(newPerson.id, newPerson);
      setPersons(persons.map(p => p.id !== newPerson.id ? p : newPerson));
    } else {
      // Person doesn't exist, creating new
      const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }
      API.create(newPerson)
  
      setPersons(persons.concat([newPerson]))
    }
  }

  const getPersonById = id => {
    return persons.find(p => p.id === id);
  }

  const getPersonByName = name => {
    console.log("asked for", name);
    const result = persons.find(p => p.name.toUpperCase() === name.toUpperCase());
    console.log("found", result);
    return result;
  }

  const removePerson = id => {
    const confirmed = window.confirm(`Are you sure you want to remove ${getPersonById(id).name}?`)
    if (!confirmed) return;

    setPersons(persons.filter(p => p.id !== id));
    return API.deleteEntry(id);
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
      <FilteredPersonTable filter={currentFilter} persons={persons} removePerson={removePerson}/>
    </div>
  )
}

export default App