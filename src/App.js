import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import EmpList from './modules/employee/pages/EmpList';
import AddEmp from './modules/employee/pages/AddEmp';
import EditEmp from './modules/employee/pages/EditEmp';
import NavBar from './modules/index/components/NavBar';
import Counter from './modules/counter/pages/Counter';
import Count from './modules/counter/pages/Count';

function App() {

  let style = {
    color:'black',
    textDecoration:'none'
  }
  
  return (
    <Router>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <h4><Link to="/" style={style}>React Demo App</Link></h4>
              <NavBar />
            </div>
          </div>
          <div className="card-body">
            <Switch>
              <Route path="/emplist" component={EmpList} />
              <Route path="/add" component={AddEmp} />
              <Route path="/edit/:id" component={EditEmp} />
              <Route path="/counter" component={Counter} />
              <Route path="/count" component={Count} />
              <Redirect to="/emplist" />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
