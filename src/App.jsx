import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { Home } from './pages/Home';
import Favoritos  from './pages/Favoritos';


function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <nav className="p-4 bg-gray-800 text-white flex gap-4">
          <Link to="/">Início</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}


export default App;