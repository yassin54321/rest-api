import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/action'

const AddUser = () => {
    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            fullName,
            email,
            phone
        }
        dispatch(addUser(newUser))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
            <label>email</label>
            <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <label>phone</label>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <button type='submit'>Confirm</button>
        </form>
       
    </div>
  )
}

export default AddUser