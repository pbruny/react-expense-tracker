import React, { useState } from 'react'

const AddTransaction = () => {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Add a description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
        </div>

        <div className="form-control">
          <label htmlFor="text">Enter the value</label>
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Negative for expense, normal to income" />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction