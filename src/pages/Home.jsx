import React from 'react'
import Form from '../hooks/Form'

import User from '../components/User'
import State from '../hooks/state'


const Home= () => {
  return (
    <div>
      <h1>Home</h1>
         <Form/>
      <State/>
      <User name="prakash" age={20}/>
    </div>
  )
}

export default Home