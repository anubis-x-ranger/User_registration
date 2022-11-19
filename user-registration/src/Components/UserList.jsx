import React from 'react'

const UserList = ({item}) => {
    
  return (
    <>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    </>
    
  )
}

export default UserList