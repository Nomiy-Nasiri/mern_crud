import React from 'react'

const UpdateUsers = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form action="">
        <h2>Update User</h2>
        <div className='mb-2'>
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" placeholder="Enter email" />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Phone</label>
          <input type="text" className="form-control" placeholder="Enter phone" />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Age</label>
          <input type="text" className="form-control" placeholder="Enter age" />
        </div>
        <button type="submit" className="btn btn-success">Update</button>

      </form>
    </div>
  </div>
  )
}

export default UpdateUsers
