import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

// Styles

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
