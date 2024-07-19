import './App.css';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Lobby from './Components/Lobby';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/lobby' element={<Lobby/>} />
      </Routes>
    </Router>


      
    
    </>
  )
}

export default App
