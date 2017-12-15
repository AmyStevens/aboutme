import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const Home = () => (
  <div>
  <h1>Amy Aristizabal</h1>
  <button class="ui button"><Link to='/Professional'>Professional</Link></button>
  <button class="ui button"><Link to='/Family'>Family</Link></button>
  <button class="ui button"><Link to='/Hobbies'>Hobbies</Link></button>
  </div>





)

export default Home
