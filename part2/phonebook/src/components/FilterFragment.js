import React from 'react'

const FilterFragment = ({currentFilter, setFilter}) => {
  return (
    <div>
      Show only those matching: <input value={currentFilter} onChange={event => setFilter(event.target.value)} />
    </div>
  )
}

export default FilterFragment