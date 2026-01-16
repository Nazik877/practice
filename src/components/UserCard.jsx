import React from 'react'

const UserCard = ({ name, age, photo}) => {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt ={name} width="80"/>
      <h3>{"Ivan"}</h3>
      <p> {15} old</p>
    </div>
  )
}

export default UserCard
