import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Erro ao buscar países:', error));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {countries.map(country => (
        <Link to={`/detalhes/${country.cca3}`} key={country.cca3}>
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <img src={country.flags.svg} alt={country.name.common} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{country.name.common}</h2>
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Região:</strong> {country.region}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;

