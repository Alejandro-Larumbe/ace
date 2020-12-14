import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadStudent, deleteUser } from './userActions';
import UserCard from './UserCard';



const UserCardContainer = (props) => {
  const user = useSelector(state => state.student)
  const student = useSelector(state => state.student)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadStudent(id));
  }, []);

  if(!student) return null

  console.log('-------', student)

  return (
    <UserCard
      user={student}
      // getStudent={() => dispatch(loadStudent(id))}
    />
  )
}

export default UserCardContainer
