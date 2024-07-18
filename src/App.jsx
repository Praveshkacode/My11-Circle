import './App.css';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import My11 from './Components/My11';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/my11' element={<My11/>} />
      </Routes>
    </Router>


      
    
    </>
  )
}

export default App
