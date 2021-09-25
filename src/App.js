import React from 'react';
import MainPage from './component/Pages/MainPage/MainPage'
import MultigameChooser from './component/Pages/MainPage/MultigameChooser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><MainPage /></Route>
        <Route path="/multigameChooser"><MultigameChooser /></Route>
        
      </Switch>
    </Router>
  );
}
