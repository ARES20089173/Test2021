import React from 'react';
import MainPage from './component/Pages/MainPage/MainPage'
import MultigameChooser from './component/Pages/MainPage/MultigameChooser';
import TournamentLobby from './component/Pages/MainPage/TournamentLobby';
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
        <Route exact path="/multigameChooser"><MultigameChooser /></Route>
        <Route exact path="/multigameChooser/tournamentLobby/:id" render={(props) => <TournamentLobby {...props} />}/>
      </Switch>
    </Router>
  );
}
