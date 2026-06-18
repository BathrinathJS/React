

import { useState } from "react";
function UseStateHooks(){

    // const counter = 0


    let [counter , setCounter] = useState(0)
    

    /// the first value in the useState is a variable and the second value is an function 
    /// which is used to alter the variable , react changes the state of this variable without taking any refernces 
    /// this would have taken some much work in javascript by using the DOM API 


    // https://mensurdurakovic.com/too-many-rerenders-error-in-react
    return (


        <>
            <h1> Counter : {counter}</h1>        

            <button id="add"  onClick={() => {setCounter(counter+1)}}>Add</button>
            <button id="del" onClick={() => {setCounter(counter-1)}} >Delete</button>
        
        </>


    )

}


export default UseStateHooks;