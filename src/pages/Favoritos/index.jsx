import { useFavorites } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';

export default function Favoritos() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <div className="p-4">Nenhum país favoritado.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Países Favoritos</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((country) => (
          <div key={country.cca3} className="bg-white rounded shadow p-4">
            <img
              src={country.flags.svg}
              alt={`Bandeira de ${country.name.common}`}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold mb-1">{country.name.common}</h2>
            <p><strong>Região:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            <Link
              to={`/pais/${country.cca3}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

