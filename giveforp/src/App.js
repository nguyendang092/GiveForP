import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Letter1 from './components/Letter1/Letter1';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/letter" element={<Letter1 />} />
    </Routes>
  </Router>
  );
}
export default App;
