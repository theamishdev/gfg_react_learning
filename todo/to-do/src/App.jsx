import { useState } from 'react'
import './App.css'
import { v4 as uuid } from 'uuid'

function App() {
  const [todo, setTodo] = useState('')
  const [data, setData] = useState([])

  const todoinput = (e) => {
    setTodo(e.target.value)
  }

  const Addtodoclick = () => {
    if (!todo.trim()) return
    setData([...data, { id: uuid(), text: todo, completed: false }])
    setTodo('')
  }

  const toggleCheck = (id) => {
    setData(
      data.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const deleteTodo = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Todo List</h1>
        <div className="input-wrapper">
          <input
            value={todo}
            onChange={todoinput}
            placeholder="Add your task here..."
            className="todo-input"
            onKeyDown={(e) => e.key === 'Enter' && Addtodoclick()}
          />
          <button onClick={Addtodoclick} className="add-btn">Add</button>
        </div>

        <div className="todo-list">
          {data.length === 0 && <p className="empty-message">No tasks yet. Add one above!</p>}
          {data.map(item => (
            <div key={item.id} className={`todo-item ${item.completed ? 'completed' : ''}`}>
              <label className="todo-content">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleCheck(item.id)}
                />
                <span className="todo-text">
                  {item.text}
                </span>
              </label>
              <button onClick={() => deleteTodo(item.id)} className="delete-btn">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
