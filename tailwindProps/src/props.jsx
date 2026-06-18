import React from 'react'

function Card({props}) {

   console.log('props: ', props);
return (

  <>


 
  
  <div  className =" bg-amber-50 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img src="https://tailwindcss.com/_next/static/media/erin-lindford.0sv7~gc~8i-hf.jpg"  className ="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" />
  <div className ="space-y-2 text-center sm:text-left">
    <div  className ="space-y-0.5">
      <p  className ="text-lg font-semibold text-black">Erin Lindford</p>
      <p  className ="font-medium text-gray-500">Product Engineer</p>
    </div>
    <button  className ="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div>
  
  </>

)

} 

export default Card 