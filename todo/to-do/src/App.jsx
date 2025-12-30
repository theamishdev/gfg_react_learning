import { useState } from 'react'
import './App.css'
function App() {
  const [todo,TodoSet]=useState()
  const todoinput=(e)=>{
    TodoSet(e.target.value)
  }
  return(
      <div className='App'>
      <input  value={todo} onChange={todoinput} placeholder='Add your task here'/>
      <><button>Add</button></>

      <div>
          <div>
            <label>
              <input type='checkbox'/>
            </label>
            <button>Delete</button>
          </div>
      </div>
      </div>
  )
}

export default App
