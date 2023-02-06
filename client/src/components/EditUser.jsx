

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form,FormControl} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editUser, getUsers } from '../redux/action';


const EditUser = ({user}) => {
    const [show, setShow] = useState(false);
    const [fullName,setFullName] = useState(user.fullName)
    const [email,setEmail] = useState(user.email)
    const [phone,setPhone] = useState(user.phone)
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault()
        const editedUser = {
            id:user._id,
            fullName,
            email,
            phone
        }
        dispatch(editUser(editedUser))
        dispatch(getUsers())
        handleClose()
    }
  return (
    <div>
            <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <FormControl placeholder='name' value={fullName} onChange={(e)=>setFullName(e.target.value)}></FormControl>
            <FormControl placeholder='email' value={email}  onChange={(e)=>setEmail(e.target.value)}></FormControl>
            <FormControl placeholder='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></FormControl>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default EditUser