import { useState } from 'react'
import {BrowserRouter,  Routes , Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import User from './User';
import CreateUsers from './CreateUsers';
import UpdateUsers from './UpdateUsers';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User/>} />
      <Route path="/create" element={<CreateUsers/>} />
      <Route path="/update/:id" element={<UpdateUsers/>} />

    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
