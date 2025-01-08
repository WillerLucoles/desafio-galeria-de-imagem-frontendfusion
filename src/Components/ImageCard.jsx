const ImageCard = ({ image, onFavorite }) => {
  return (
    <div className="rounded shadow-lg p-4 bg-white">
      <img
        src={image.download_url}
        alt={image.author}
        className="rounded h-48 w-full object-cover"
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-600">{image.author}</span>
        <button
          onClick={() => onFavorite(image)}
          className="text-blue-500 hover:underline"
        >
          Favoritar
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
