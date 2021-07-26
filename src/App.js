import React from "react";
import "./App.css";
import Covid from "./components/covid";

function App() {
  return (
    <div className="App">
      <header>
        <h1>COVID-19 TRACKER</h1>
      </header>
      <Covid />
    </div>
  );
}

export default App;
