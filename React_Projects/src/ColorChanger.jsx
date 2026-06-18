import { useState } from 'react'
import './ColorChanger.css'

function Colorchanger() {
  



    let [color , setColor] = useState('black')

    return (
      
        <>

        <main className={`min-w-fit h-screen flex justify-center items-end p-0 m-0 bg-${color}-500`}>


      <div className='h-14 w-9/10 border-2 border-solid border-white-500 mb-16 rounded-2xl flex justify-evenly items-center  bg-black'>


       

        <div className={`h-10 w-20 border-3 border-solid border-blue-500 rounded-4xl text-center`}>

       <button id='blue-button' className='h-full w-full ' onClick={()=>setColor('blue')}>Blue</button>

        </div>
        <div className={`h-10 w-20 border-3 border-solid border-green-500 rounded-4xl text-center`}>

       <button id='green-button' className='h-full w-full' onClick={()=>setColor('green')}>Green</button>

        </div>
        <div className={`h-10 w-20 border-3 border-solid border-yellow-500 rounded-4xl text-center`}>

       <button id='yellow-button' className='h-full w-full' onClick={()=>setColor('yellow')}>Yellow</button>

        </div>
        <div className={`h-10 w-20 border-3 border-solid border-indigo-500 rounded-4xl text-center`}>

       <button id='indigo-button' className='h-full w-full' onClick={()=>setColor('indigo')}>Indigo</button>

        </div>
        <div className={`h-10 w-20 border-3 border-solid border-violet-500 rounded-4xl text-center`}>

       <button id='violet-button' className='h-full w-full'onClick={()=>setColor('violet')}>Violet</button>

        </div>
        <div className={`h-10 w-20 border-3 border-solid border-red-500 rounded-4xl text-center`}>

       <button id='red-button' className='h-full w-full' onClick={()=>setColor('red')}>Red</button>

        </div>

        </div>


        </main>
        
      </>

  )

}

export default Colorchanger
