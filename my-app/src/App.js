import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { Form } from './pages/Form';
import { Admin } from './pages/Admin';



function App() {
  return (<Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  </Router>)
}

export default App;

