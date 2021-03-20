import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SelectDestination from './component/SelectDestination/SelectDestination';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="app">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/:id">
              <SelectDestination />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <h1>Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
