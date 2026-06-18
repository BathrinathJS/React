

import Index from "./index.jsx"
// function is imported here 



/// both app.js file and the index.js file can return the html element 
/// this html element is then returned 
function App() {
  

  return (
 
 <>
  <Index/>
  <h1> Second element </h1>

  {/* this is called a fragment in react 
  to export multiple tags you need to hold them in a single one */}
 </>
  
  );
}

export default App

