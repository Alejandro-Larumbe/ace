import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadStudent, deleteUser } from './userActions';
import UserCard from './UserCard';



const UserCardContainer = (props) => {
  const user = useSelector(state => state.user)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    loadStudent(id);
  }, []);


  return (
    <UserCard
      user={user}
      // getStudent={() => dispatch(loadStudent(id))}
    />
  )
}

export default UserCardContainer
