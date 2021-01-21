import React from "react";
import {
  BrowserRouter,
  Switch
} from "react-router-dom";
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import Flow from './pages/Flow';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/login" component={Login} restricted={true} />
          <PublicRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/flow" component={Flow} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
