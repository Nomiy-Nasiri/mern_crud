import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const User = () => {
  const [users, setUsers] = useState([{
    name: 'hello',
    email: 'hello@gmail.com',
    phone: '1234444',
    age: "10"
    // action: "frontend"       
  }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'> add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th> Email</th>
              <th> phone</th>
              <th> Action</th>
              <th>Age</th>
            </tr>
          </thead>
          {
            users.map(user => (
              <tbody key={user.name}>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.age}</td>
                  <td>       
                    <Link to="/Update" className='btn btn-success '> Edit +</Link>
                    <button className='btn btn-success'>Delete</button>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>

      </div>
    </div>
  )
}

export default User
