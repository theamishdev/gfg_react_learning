import Button from './practice/Button';
import './App.css'
//React --> It's declarative by nature
//JS --> Imperative by Nature
//JSX --> JavaScript XML--> HTML like syntax used in React to create React Elements 
function App() {
  const name="Amish Verma";
  const element= <h3>Hello I'm just starting my Journey of React Learning</h3>
  return (
    <>
    
    <h1>GFG PRACTICE</h1>
    <h2>My name is {name}</h2>
    {element}
    <Button/>
    </>
  )
}

export default App
