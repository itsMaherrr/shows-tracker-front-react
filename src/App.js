import MyNavbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import React from 'react';
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import Watched from './Watched';

function App() {
  return (
    <Router>
      <div className="App">
          <MyNavbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Create">
                <Create />
              </Route>
              <Route exact path="/Add">
                <Add />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/Watched">
                <Watched />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
