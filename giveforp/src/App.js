import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Letter1 from './components/Letter1/Letter1';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/letter" element={<Letter1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
