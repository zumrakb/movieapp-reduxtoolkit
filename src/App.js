import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/*  <Route path="/search" element={<SearchResults />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
