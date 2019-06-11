import React from 'react'
import PersonTable from './PersonTable'

const FilteredPersonTable = ({filter, persons}) => {
  return <PersonTable persons={persons.filter(({name, number}) => name.toUpperCase().includes(filter.toUpperCase()))} />
}

export default FilteredPersonTable