import { useState } from "react";
import { useFavorites } from "../Context/FavoritesContext";

const FavoritesSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { favorites } = useFavorites();

  return (
    <section className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isOpen ? "Ocultar Favoritos" : "Exibir Favoritos"}
      </button>
      {isOpen && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {favorites.length === 0 ? (
            <p>Nenhum favorito ainda.</p>
          ) : (
            favorites.map((image) => (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.author}
                className="rounded shadow-lg"
              />
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default FavoritesSection;
