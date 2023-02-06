import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deletUser, getUsers } from '../redux/action';
import EditUser from './EditUser';

const UserCard = ({user}) => {
    const dispatch=useDispatch()
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.fullName}</Card.Title>
        <Card.Text>
        {user.phone}
        </Card.Text>
        <Card.Text>
        {user.email}
        </Card.Text>
        <Button variant="danger" onClick={()=>{dispatch(deletUser(user._id));dispatch(getUsers())}}>Delete</Button>
       <EditUser user={user}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard