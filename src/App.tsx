import React from 'react';
import './App.css';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} component={Dashboard} exact />
        <Route path={'/users'} component={Users} />
        <Route path={'/register'} component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
