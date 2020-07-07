import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "pages/Login/Login";
import Pokemon from "pages/Pokemon/Pokemon";
import PokemonDetail from "pages/PokemonDetail/PokemonDetail";

import PrivateRoute from "helpers/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <PrivateRoute exact path="/pokemons">
          <Pokemon />
        </PrivateRoute>

        <PrivateRoute exact path="/pokemons/:name">
          <PokemonDetail />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
