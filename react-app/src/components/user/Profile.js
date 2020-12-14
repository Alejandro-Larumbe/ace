import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';


export default function ProfileContainer() {
  const user = useSelector(state => state.user)

  return (
    <UserCard user={user}/>
  )
}
