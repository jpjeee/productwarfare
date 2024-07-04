import React from 'react'
import Navbar from './Components/Navbar'
import Jumbotoron from './Components/Jumbotoron'
import Offerings from './Components/Offerings'
import Form from './Components/Form'
import Client from './Components/Client'
import Team from './Components/Team'
import Footer from './Components/Footer'


const App:React.FC= ()=> {
  return (
    <div>
      <Navbar />
      <Jumbotoron />
      <Offerings />
      <Form />
      <Client />
      <Team />
      <Footer />
    </div>

  )
}

export default App