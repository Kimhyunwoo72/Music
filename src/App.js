import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main"
import Contents from "./components/pages/Contents"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/Contents" exact component={Contents} />
    </Router>
  );
}

export default App;
