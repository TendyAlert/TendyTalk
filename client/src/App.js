import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Signup from './components/signup/signup';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path = "/auth/signup" Component={ Signup } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
