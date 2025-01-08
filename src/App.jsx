import { useEffect, useState } from "react";
import { fetchImages } from "./Api/Pcisum";
import ImageCard from "./Components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages(1, 20);
      setImages(data);
      setLoading(false);
    };
    loadImages();
  }, []);

  const handleFavorite = (image) => {
    console.log("Imagem favoritada:", image);
    //lógica de favoritos.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Galeria de Imagens</h1>
      {loading ? (
        <p className="text-center">Carregando...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} onFavorite={handleFavorite} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
