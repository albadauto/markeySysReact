import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./components/Index";

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={Index} />
    </Router>
  );
};

export default App;
