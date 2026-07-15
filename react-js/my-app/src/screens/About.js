import React from 'react'
import Title from '../components/Title'
import UnOrdered from '../components/UnOrdered'
import Greetings from '../Assignment/Greetings'
import UserCard from '../Assignment/UserCard'
import Button from '../Assignment/Button'
const About = () => {
  return (
    <div>
     {/* <Title name ="to Day i read news"/>
     <Title demo ="today we started react props"/>
     <Title test = "good day "/> */}
     <Greetings name ="satya"/>
     <UserCard age = "23" city = "bhubaneswar"/>
     <Button label="submit"/>
     <Button/>
     
     {/* <UnOrdered/> */}
    </div>
  )
}

export default About