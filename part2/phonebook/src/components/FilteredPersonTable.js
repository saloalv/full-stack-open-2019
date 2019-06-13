import React from 'react'
import PersonTable from './PersonTable'

const FilteredPersonTable = ({filter, persons, removePerson}) => {
  return <PersonTable persons={persons.filter(({name, number}) => name.toUpperCase().includes(filter.toUpperCase()))}
  removePerson={removePerson} />
}

export default FilteredPersonTable