import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/nav/nav'
import Signup from './components/signup/signup';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Nav />
          </div>
          <Routes>
            <Route path = "/auth/signup" Component={ Signup } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
