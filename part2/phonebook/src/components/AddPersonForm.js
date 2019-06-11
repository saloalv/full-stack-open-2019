import React from 'react'

const AddPersonForm = ({nameGet, nameSet, numberGet, numberSet, addName}) => {
    return (
        <form onSubmit={addName}>
        <div>
          name: <input value={nameGet} onChange={event => nameSet(event.target.value)} />
        </div>
        <div>
          number: <input value={numberGet} onChange={event => numberSet(event.target.value)} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddPersonForm