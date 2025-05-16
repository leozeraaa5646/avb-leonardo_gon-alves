import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(response => setCountry(response.data[0]))
      .catch(error => console.error('Erro ao buscar detalhes do país:', error));
  }, [code]);

  if (!country) return <div className="p-4">Carregando...</div>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Voltar</Link>
      <div className="bg-white rounded shadow p-4">
        <img src={country.flags.svg} alt={country.name.common} className="w-full h-60 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
        <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
        <p><strong>População:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Região:</strong> {country.region}</p>
        <p><strong>Sub-região:</strong> {country.subregion}</p>
        <p><strong>Moeda:</strong> {country.currencies ? Object.values(country.currencies)[0].name : 'N/A'}</p>
        <p><strong>Idiomas:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
      </div>
    </div>
  );
}

export default CountryDetails;
