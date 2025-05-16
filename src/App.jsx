import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:code" element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
