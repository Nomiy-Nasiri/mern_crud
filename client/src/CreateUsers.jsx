import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateUsers = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {

    e.preventDefault()
    axios.post("http://localhost:5000/createUser", { name, email, phone, age })
      .then(result => {
        console.log(result)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2>Add user</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" className="form-control" placeholder="Enter name"
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Phone</label>
            <input type="text" className="form-control" placeholder="Enter phone"
              onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" className="form-control" placeholder="Enter age"
              onChange={(e) => setAge(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default CreateUsers
