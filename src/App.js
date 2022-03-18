import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          <a
            href="https://github.com/ArchanaManju/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source Code
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
