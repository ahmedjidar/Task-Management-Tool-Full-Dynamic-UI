import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import { AppLayout, GetStartedInterface } from "./Components/export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegistrationRouting } from "./Components/export";
import "./App.css";
import GeneralRoutes from "./Components/GeneralRoutes";

const App = () => {

  // const [response, setResponse] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/hello')  // Adjust the URL as needed
  //   .then(response => response.text())
  //   .then(data => setResponse(data))
  //   .catch(error => console.error(error));
  // }, [])

  return (
    <Router>
      <GeneralRoutes/>
    </Router>
  );
}

export default App;
