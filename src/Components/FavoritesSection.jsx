import { useFavorites } from "../Context/FavoritesContext";

const FavoritesSection = () => {
  const { favorites } = useFavorites();

  return (
    <section className="mb-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Favoritos</h2>
        <div className="border-b border-gray-300 mt-1"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.length === 0 ? (
          <p className="text-gray-600 text-center">Nenhum favorito ainda.</p>
        ) : (
          favorites.map((image) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.author}
              className="rounded shadow-md"
            />
          ))
        )}
      </div>
    </section>
  );
};

export default FavoritesSection;
