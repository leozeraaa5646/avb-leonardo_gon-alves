import { useFavorites } from '../../context/FavoritesContext';

export default function ItemCard ({ item }){
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.some((fav) => fav.id === item.id);

  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-xl font-bold">{item.nome}</h2>
      <p>{item.descricao}</p>
      <button
        onClick={() => toggleFavorite(item)}
        className={`mt-2 px-4 py-2 rounded ${isFav ? 'bg-red-500' : 'bg-blue-500'} text-white`}
      >
        {isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      </button>
    </div>
  );
};

