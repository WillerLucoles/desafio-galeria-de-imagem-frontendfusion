import { useFavorites } from "../Context/FavoritesContext";
import ImageCard from "./ImageCard";

const FavoritesSection = () => {
  const { favorites } = useFavorites();

  return (
    <section className="mb-6">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-gray-800">Favoritos</h2>
        <div className="border-b border-gray-300 mt-1"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-start">
        {favorites.length === 0 ? (
          <p className="text-gray-600 text-center">Nenhum favorito ainda.</p>
        ) : (
          favorites.map((image) => (
            <ImageCard key={image.id} image={image} isInFavorites={true} />
          ))
        )}
      </div>
    </section>
  );
};

export default FavoritesSection;
