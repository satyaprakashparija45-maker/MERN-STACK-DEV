import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      <h3>age = {props.age}</h3>
      <h3>city : {props.city} </h3>
    </div>
  )
}

export default UserCard