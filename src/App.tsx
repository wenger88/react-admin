import React from 'react';
import './App.css';
import Users from './pages/users/Users';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} component={Dashboard} exact />
        <Route path={'/users'} component={Users} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
