import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This Project was coded By{" "}
          <a
            href="https://github.com/ArchanaManju/"
            target="_blank"
            rel="noreferrer"
          >
            ArchanaManju
          </a>{" "}
          and is a{" "}
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
