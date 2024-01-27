import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue(){
    if(count === 20){
      setCount(0)
      alert("you can not go up now")
    }
    else {
      setCount(count+1)
    }
  }

  function removeValue(){
    if(count === 0){
      setCount(0)
      alert("you can not go down now")
    }
    else{
      setCount(count-1)
    }
    
  }
  return (
   <>
   <h1>Click button to change value</h1>
   <h2>{count}</h2>
   <button onClick={addValue}>Add counter</button>
   <br />
   <br />
   <button onClick={removeValue}>Remove counter</button>
   </>
  )
}

export default App
