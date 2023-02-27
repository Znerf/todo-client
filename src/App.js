import { Routes, Route } from 'react-router-dom';

import Signup from './pages/signup'
import Login from './pages/login';
import Home from './pages/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
            <Route index element={ <Home />} />
            <Route path="signup" element={<Signup /> } />
            <Route path="login" element={<Login /> } />

        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
