import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
