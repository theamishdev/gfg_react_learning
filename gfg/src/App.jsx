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
import Hooks2 from './Hooks/Hooks2';
import Hooks3 from './Hooks/Hooks3';
import BrandFilter from './Hooks/BrandFilter';
import AddCart from './Hooks/AddCart';
import Hooks4 from './Hooks/Hooks4';





/* Shortcut key for comment---->  Alt+Shift+A */
//----------------------------------------------------------------------------------------------------------






function App() {
  const element = <h3>Hello I'm just starting my Journey of React Learning</h3>
  const navigate = useNavigate();
  return (
    <>
    HOOKS 1,2,3 are useState basic examples
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
            <button onClick={() => navigate('/hooks1')}>Hooks1</button>----------Hooks Basic part 1<br></br><br></br>
            <button onClick={() => navigate('/hooks2')}>Hooks2</button>-----------Hooks Basic part 2<br></br><br></br>
            <button onClick={() => navigate('/hooks3')}>Hooks3</button>-----------Hooks Basic part 3<br></br><br></br>
            <button onClick={() => navigate('/hooks4')}>Hooks4</button>-----------Hooks Basic part 4<br></br><br></br>
            <button onClick={() => navigate('/brandfilter')}>BrandFilter</button>-Mini_project_Brand_Filter<br></br><br></br>
            <button onClick={() => navigate('/cart')}>Cart</button>-Mini_project_Add_to_Cart<br></br><br></br>
          </div>
          <div style={{ marginTop: '20px', width: '100%' }}>
            <Routes>
              <Route path="/hooks1" element={<Hooks1 />} />
              <Route path="/hooks2" element={<Hooks2 />} />
              <Route path="/hooks3" element={<Hooks3 />} />
              <Route path="/hooks4" element={<Hooks4 />} />
              <Route path="/brandfilter" element={<BrandFilter />} />
              <Route path="/cart" element={<AddCart />} />
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
