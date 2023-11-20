import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { Form } from './pages/Form';


function App() {
  return (<Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path='/' element={<Home />} />

      <Route path='/form' element={<Form />} />
      
      <Route path='/login' element={<Login />} />
    </Routes>
  </Router>)
}

export default App;

