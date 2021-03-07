import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import UserCard from './UserCard';



function Profile(props) {
  const { user } = props
  return (
    <>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
    </>
  )
}


export default function ProfileContainer() {
  const user = useSelector(state => state.user)

  return (
    <Profile user={user} />
  )
}
