import React from 'react';
import './App.css';
import Users from './pages/users/Users';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from "./pages/Login";
import UserCreate from "./pages/users/UserCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} component={Dashboard} exact />
        <Route path={'/register'} component={Register} />
          <Route path={'/login'} component={Login} />
          <Route path={'/users'} exact component={Users} />
          <Route path={'/users/create'} component={UserCreate} />
      </BrowserRouter>
    </div>
  );
}

export default App;
