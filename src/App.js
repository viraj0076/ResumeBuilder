import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/resumeMaker" element={<Body />} />

        <Route exact path="/resumePreview" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
