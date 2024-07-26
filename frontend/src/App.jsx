import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Generate from "./components/Generate";
import Login from './components/Login';
import Signup from './components/Signup'

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/generate' element={<Generate />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
    </Routes>
  )
};

export default App;
