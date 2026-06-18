import { useState } from 'react'
import './App.css'
import Card from './props.jsx';



/// https://www.fullstackfoundations.com/blog/react-component-lifecycle --> refer this article 

function App() {
  

  return (

    <>
    <h2 className='bg-green-400 p-4 rounded-4xl '> React Props </h2>
    <Card value = 'No value' />

    {/* the data for the props are passed here  ,
     variables are passed in {} with brackets , and these javascript variables are also accessed using brackets 
     
     
     

      function someFunction(variable = 'default value' )

    {variable || default value}
     
     */}
    </>
   



  )
}

export default App
