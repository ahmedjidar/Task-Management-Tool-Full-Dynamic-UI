import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import { AppLayout } from "./Components/export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {

  return (
    <Router>
      <AppLayout/>
    </Router>
  );
}

export default App;
