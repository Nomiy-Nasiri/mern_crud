// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const UpdateUsers = () => {
//   const { id } = useParams()
//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [phone, setPhone] = useState()
//   const [age, setAge] = useState()
//   const navigate = useNavigate()

//   useEffect(() => {
//     axios.get("http://localhost:5000/getUser/" + id)
//       .then(result => {
//         console.log(result)
//         setName(result.data.name)
//         setEmail(result.data.email)
//         setAge(result.data.age)
//         setPhone(result.data.phone)
//         navigate('/')
//           .catch(err => console.log(err))
//       })
//   }, [])

//   const Update = () => {
//     e.preventDefault()
//     axios.put("http://localhost:5000/updateUser/"+id, { name, email, phone, age })
//     .then(result => {
//       console.log(result)
//       navigate("/")
//     })
//     .catch(err => console.log(err))

//   }
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//       <div className='w-50 bg-white rounded p-3'>
//         <form onSubmit={Update}>
//           <h2>Update User</h2>
//           <div className='mb-2'>
//             <label htmlFor="">Name</label>
//             <input type="text" className="form-control" placeholder="Enter name" value={name} />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor="">Email</label>
//             <input type="text" className="form-control" placeholder="Enter email" value={email}
//             onChange={(e) => setEmail(e.target.value)}/>
//           </div>
//           <div className='mb-2'>
//             <label htmlFor="">Phone</label>
//             <input type="text" className="form-control" placeholder="Enter phone" value={phone}
//             onChange={(e) => setPhone(e.target.value)} />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor="">Age</label>
//             <input type="text" className="form-control" placeholder="Enter age" value={age}
//             onChange={(e) => setAge(e.target.value)} />
//           </div>
//           <button type="submit" className="btn btn-success">Update</button>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default UpdateUsers



import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUsers = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/getUser/" + id)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
        setPhone(result.data.phone)
      })
      .catch(err => console.log(err))
  }, [id])

  const Update = (e) => {
    e.preventDefault()
    axios.put("http://localhost:5000/updateUser/" + id, { name, email, phone, age })
      .then(result => {
        console.log(result)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Phone</label>
            <input type="text" className="form-control" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" className="form-control" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUsers
