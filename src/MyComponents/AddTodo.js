import React from 'react'

const AddTodo = (props) => {
  return (
    <div className='container my-3'>
        <h3>Add a Task</h3>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Todo Title
    </label>
    <input
      type="text"
      className="form-control"
      id="title"
      aria-describedby="emailHelp"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">
      Todo Description
    </label>
    <input
      type="text"
      className="form-control"
      id="desc"
    />
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">
    Add a Todo
  </button>
</form>

    </div>
  )
}

export default AddTodo
