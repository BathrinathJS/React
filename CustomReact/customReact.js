
// what react does ?? 
// react creates a root and renders the jsx on that root 
// jsx is returned in a form of a function 

/// create a root element and injects the jsx (react element) inside it 

//// react element is in the form of an object 

// how the react element object is structered

const obj = {

    key : 'a',
    // props contains the attributes for that tag 
    props:{
        href: "https://google.com",
        title: 'google',
        target: '_blank'
    },
    // children has the contents to the tag 
    children: 'click here to visit google',
}






function customRender(reactElement , rootElement){

/// reactElement --> create the element and injects it to the root 
/// rootElement --> the react element is injected 

        //create element 
    const ele = document.createElement(reactElement.key);

// console.log(reactElement.key);

    for(let [key , value] of Object.entries(reactElement.props)){
        

        if(key === 'children') continue;

        ele.setAttribute(key , value);   
    }
    ele.innerText = reactElement.children


    console.log(rootElement);
    
    rootElement.appendChild(ele)
}


const root = document.getElementById('root')
customRender(obj ,root)


