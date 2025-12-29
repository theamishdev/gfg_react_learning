//React --> It's declarative by nature
//JS --> Imperative by Nature
//JSX --> JavaScript XML--> HTML like syntax used in React to create React Elements 
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from './practice/Button';
import './App.css'
import Header from './practice/Header'
import Admin from './practice/Admin'
import VirtualDOM from './practice/VirtualDOM';
import Hooks1 from './Hooks/Hooks1';





//----------------------------------------------------------------------------------------------------------






function App() {
  const element = <h3>Hello I'm just starting my Journey of React Learning</h3>
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'start', marginTop: '20px', gap: '20px' }}>
        {/* Left Side: Practice Buttons & Output */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
          <h1>GFG PRACTICE</h1>
          {element}
          <div><button onClick={() => navigate('/practice')}>Show Button RFC</button>-------functional component display with button</div>
          <br />
          <div><button onClick={() => navigate('/practice-header')}>Show Header RFC</button>------normal functional compon</div>
          <br />
          <div><button onClick={() => navigate('/practice-Admin')}>Show Conditional RFC</button>----- conditional rendering</div>
          <br />
          <div><button onClick={() => navigate('/practice-VirtualDOM')}>Show Virtaul DOM Working RFC</button>------virtual dom</div>

          <div style={{ marginTop: '20px', width: '100%' }}>
            <Routes>
              <Route path="/practice" element={<Button />} />
              <Route path="/practice-header" element={<Header />} />
              <Route path="/practice-Admin" element={<Admin />} />
              <Route path="/practice-VirtualDOM" element={<VirtualDOM />} />
            </Routes>
          </div>
        </div>

        {/* Center: Hooks Button & Output */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1>Hooks</h1>
          <div>
            <button onClick={() => navigate('/hooks1')}>Hooks1</button>----------Hooks Basic part 1
          </div>
          <div style={{ marginTop: '20px', width: '100%' }}>
            <Routes>
              <Route path="/hooks1" element={<Hooks1 />} />
            </Routes>
          </div>
        </div>

        {/* Right Side: Empty for spacing */}
        <div></div>
      </div>
    </>
  )
}

export default App
