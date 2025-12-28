//React --> It's declarative by nature
//JS --> Imperative by Nature
//JSX --> JavaScript XML--> HTML like syntax used in React to create React Elements 
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from './practice/Button';
import './App.css'
import Header from './practice/Header'
import Admin from './practice/Admin'
import VirtualDOM from './practice/VirtualDOM';





//----------------------------------------------------------------------------------------------------------






function App() {
  const element = <h3>Hello I'm just starting my Journey of React Learning</h3>
  const navigate = useNavigate();
  return (
    <>
      <h1>GFG PRACTICE</h1>
      {element}
      <button onClick={() => navigate('/practice')}>Show Button RFC</button><br/><br/>
      <button onClick={() => navigate('/practice-header')}>Show Header RFC</button><br/><br/>
      <button onClick={() => navigate('/practice-Admin')}>Show Conditional RFC</button><br/><br/>
      <button onClick={() => navigate('/practice-VirtualDOM')}>Show Virtaul DOM Working RFC</button><br/><br/>

      <Routes>
        <Route path="/practice" element={<Button />} />
        <Route path="/practice-header" element={<Header />} />
        <Route path="/practice-Admin" element={<Admin />} />
        <Route path="/practice-VirtualDOM" element={<VirtualDOM />} />

      </Routes>
      {/* <Button/> */}
    </>
  )
}

export default App
