import { useFavorites } from "../Context/FavoritesContext";
import { FiStar, FiDownload } from "react-icons/fi";

const ImageCard = ({ image, isInFavorites = false }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorited = favorites.some((fav) => fav.id === image.id);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFavorite(image.id);
    } else {
      addFavorite(image);
    }
  };

  const handleOpenImage = () => {
    window.open(image.download_url, "_blank");
  };

  return (
    <div
    className="relative group rounded-lg shadow-md overflow-hidden max-w-xs max-h-60"
    >
      <img
        src={image.download_url}
        alt={image.author}
        className="object-cover"
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleFavoriteClick();
        }}
        className={`absolute top-2 right-2 z-20 ${
          isFavorited ? "text-yellow-500" : "text-gray-400"
        }`}
      >
        <FiStar size={24} />
      </button>

      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-between items-end p-3 md:opacity-0 md:group-hover:opacity-100 z-10">
        <span className="text-white text-md font-bold">{image.author}</span>
        <button
          onClick={handleOpenImage}
          className="bg-green-500 text-white text-sm px-3 py-1 rounded"
        >
          <FiDownload size={16} className="inline-block mr-1" />
          Baixar
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
