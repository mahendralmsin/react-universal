import React from 'react';
import './App.scss';

import Tables from "./jsx/Tables/Tables";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{textAlign: "center", maxWidth: "450px", display: 'flex', flexDirection: 'column', minHeight: "100vh", alignItems: 'center', justifyContent: 'center', margin: "auto"}}>
        <h1>React Universal</h1>
        <p>
          This React universal project aims to include, Essential components and
          dependencies for standardized component creation, Fostering learning
          for all contributors. It also features a CSS superset with SCSS
          variables and mixins for enhanced styling capabilities.
        </p>
      </header>
      <Container>
        <Tables />
      </Container>
    </div>
  );
}

export default App;
