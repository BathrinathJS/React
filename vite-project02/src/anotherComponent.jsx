

function Test(){


   const list = [ {
        name : 'bathri',
        age : 19,
        city : 'coimbatore',
        Objectkey : 'key_coimbatore',

    },
      {
        name : ' JS bathrinath',
        age : 19,
        city : 'panruti',
        Objectkey : 'key_panruti',
    }, {

         name : 'bathrinath',
        age : 19,
        city : 'cuddalore',
        Objectkey : 'key_cuddalore',
    }];

    // https://medium.com/@ishaqibrahimbss/reacts-favorite-warning-each-child-in-a-list-should-have-a-unique-key-prop-909dfe50cbe3
    return ( 


        <>
        
        <ol>    
        {list.map( function (item) {
                    
                    
                    
            return(            
                        
                        <li key ={item.Objectkey}>
     
                        <span key="1">
                         Name : {item.name}
                        </span>
                       
                        <span key="2">
                        Age : {item.age}
                        </span>
                       
                        <span key="3">
                        City : {item.city}
                        </span>
                </li>
                       
                    )
                }  )}
            </ol>
        </>
    )
}


function Test2(){


    return(

            <>
            

                <label htmlFor="input1">Enter the input Here :</label>
                <input type="text"  id="input1"/>
                < Test />

            </>



    )


}
export default Test2;
