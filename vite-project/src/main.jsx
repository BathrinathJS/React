import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from 'react';

import DemoJS from "./demo.jsx";

function someFunction() {
  return (
    <>
      <h1>hello world | </h1>
    </>
  );

}


const anotherElement = (

  <a href="www.google.com" target="_blank" > google  </a> 
)


/// custom object created using the create element 


let newComp = React.createElement(

   'a',
  {href : 'http://google.com' , target: '_blank'}, 
  'google' , anotherElement 
  // ---> variables are added at the end 


)


createRoot(document.getElementById("root")).render(
 
    // {/* strictmode is used for effecieny  */}
    // {/* the bundler in react converts the jsxml to the object form which can be understood by react*/}
    // {/* <App /> */}

    // <DemoJS/>


    // babbel converts the jsx to object using parsing 
         // the function can also be executed here function() --> but not the best practice              
   // objects are used directly 
   
         <MainApp />

  
);
