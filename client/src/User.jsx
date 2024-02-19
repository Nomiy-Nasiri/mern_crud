import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {


  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/users") 
      .then(result => {
        setUsers(result.data)
        console.log(result.data)
      })
      .catch(err => console.log(err));
  }, []);
 
   const handleDelete = () => {
    //delete user function will be in this row
   }
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
                    {/* <Link to={`/update/${user._id}`} className='btn btn-success '> Edit +</Link> */}
                    <Link to={`/update/${user._id}`} className='btn btn-success'>Edit</Link>
                    <button className='btn btn-danger' onClick={(e)=>handleDelete(user._id)}>Delete</button>
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
