import React, { useState } from 'react'
const User = () => {
    const [users, setUsers] = useState([{
        name: 'hello',
        email: 'hello@gmail.com',
        phone: '1234444',
        action: "frontend"       
    }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 background-white rounded p-3'> 
      <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th> Email</th>
                <th> phone</th>
                <th> Action</th>
            </tr>
        </thead>
        {
            users.map(user => (
                <tbody key={user.name}>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.action}</td>
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
