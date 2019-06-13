import React, { useState, useEffect } from 'react'
import FilteredPersonTable from './components/FilteredPersonTable';
import AddPersonForm from './components/AddPersonForm';
import FilterFragment from './components/FilterFragment';
import API from './services/Phonebook'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [currentFilter, setFilter] = useState('')
  const [notification, setNotification] = useState({ text: "", type: undefined })

  const loadFromDatabase = () => {
    API.getAll().then(receivedPersons => setPersons(receivedPersons))
  }

  useEffect(loadFromDatabase, [])

  const addName = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name.toUpperCase() === newName.toUpperCase())) {
      // Person already exists, updating number
      const update = window.confirm(`${newName} already exists, update number?`);
      if (!update) return;

      const newPerson = { ...getPersonByName(newName), number: newNumber };
      console.log(newPerson)
      setPersons(persons.map(p => p.id !== newPerson.id ? p : newPerson))
      API.update(newPerson.id, newPerson)
        .then(() => notify(`Updated number of ${newName}`, "success"))
        .catch(() => {
          notify(`${newPerson.name} has already been removed`, "error");
          loadFromDatabase();
        });
    } else {
      // Person doesn't exist, creating new
      const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }
      API.create(newPerson)
        .then(() => notify(`Added ${newName}`, "success"));
      setPersons(persons.concat([newPerson]))
    }
  }

  const notify = (text, type) => {
    setNotification({ text, type })
    console.log(notification)
    setTimeout(() => setNotification({}), 3000)
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
    const personToRemove = getPersonById(id);
    const confirmed = window.confirm(`Are you sure you want to remove ${personToRemove.name}?`)
    if (!confirmed) return;

    setPersons(persons.filter(p => p.id !== id));
    API.deleteEntry(id)
      .then(() => notify(`Removed ${personToRemove.name}`, "success"))
      .catch(() => {
        notify(`${personToRemove.name} has already been removed`, "error");
        loadFromDatabase();
      })
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification text={notification.text} type={notification.type} />
      <FilterFragment currentFilter={currentFilter} setFilter={setFilter} />
      <h2>Add a new entry</h2>
      <AddPersonForm nameGet={newName} nameSet={setNewName}
        numberGet={newNumber} numberSet={setNewNumber}
        addName={addName} />
      <h2>Numbers</h2>
      <FilteredPersonTable filter={currentFilter} persons={persons} removePerson={removePerson} />
    </div>
  )
}

export default App