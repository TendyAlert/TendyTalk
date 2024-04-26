import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/nav/nav'
import Signup from './components/auth/signup/signup';
import Login from './components/auth/login/login'
import Logout from './components/auth/logout/logout';
import NewPost from './components/newpost/newpost';
import PostView from './components/post/PostView';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Nav />
          </div>
          <Routes>
            <Route path="/auth/signup" Component={ Signup } />
            <Route path="/auth/login" Component={ Login } />
            <Route path='/auth/logout' Component={ Logout } />
            <Route path='/tendytalk/newpost' Component={ NewPost } />
            <Route path='/tendytalk' Component={ Home } />
            <Route path='/tendytalk/:id' Component={ PostView } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
