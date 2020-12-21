import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import BubblesPage from './components/BubblePage'
import "./styles.scss";

function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exacpt path='/colors'>
            <BubblesPage/>
        </PrivateRoute>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
