import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    const fetchUsers=async()=>{
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      )
      const data=await res.json();
       setUsers(data);
    }
    fetchUsers()
  },[])
  return (
    <div>
      <h1>useeffect example</h1>
      <ol>
          {users.map((user)=>(
          <li>
            {user.title}
          </li>))}
      
      </ol>
    </div>
  )
}

export default About